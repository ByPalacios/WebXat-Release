import subprocess, socket, sys
from rich.console import Console
from rich.progress import Progress
import rich.traceback

# Socket's variables
HOST = "0.0.0.0"
PORT = 5000
exitString1 = "> /dev/null 2>&1"
exitString2 = ""
exitString3 = exitString1
notLinux = False

# Instalar el manejo de excepciones para desactivar la salida de información de depuración
rich.traceback.install()

# Lista de comandos a ejecutar
if not ( sys.platform.startswith("linux")):
    exitString1 = "--file WindowsDockerfile"
    exitString2 = "--file windows-docker-compose.yml "
    exitString3 = ""
    notLinux = True


commands = [
            "docker build . -t webxat-base:staging --no-cache "+exitString1,
            "docker-compose "+exitString2+"up -d --force-recreate "+exitString3
            ]

# Inicializar Progress
progress = Progress()
task = progress.add_task("Build Image RUINE TT...", total=len(commands))

# Iniciar la barra de progreso
progress.start()

# Ejecutar los comandos y actualizar el progreso
for i, command in enumerate(commands):
    #if (i != 0):
        #task.description = "Create Container RUINE TT..."
    process = subprocess.Popen(
        command,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        universal_newlines=True,
    )
    while True:
        output = process.stderr.readline()
        if output == "" and process.poll() is not None:
            break
        if output:
            print(output.strip())
    # Actualizar el progreso para cada comando
    progress.advance(task)

# Finalizar Progress
progress.stop()

# Agregar la barra de estado
if not notLinux:
    console = Console()
    with console.status("[bold green]Wait to get succesfull server status [/bold green]", spinner='arc') as status:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                s.bind((HOST, PORT))
            except socket.error as msg:
                console.print("CONTAINER CONNECTION:[bold red] INACESSIBLE [/bold red]")
                sys.exit()
            s.listen()
            conn, addr = s.accept()
            with conn:
                while True:
                    data = conn.recv(1024)
                    if not data:
                        break
                    containerStatus=int(data.decode())
                    if containerStatus == 200:
                        console.print("CONTAINER STATUS:[bold green] SUCCESFULL [/bold green]")
                        break
                    elif containerStatus == 400:
                        console.print("CONTAINER STATUS:[bold red] ERROR INSTALLATION [/bold red]") 
                        break
                    elif containerStatus == 500:
                        console.print("CONTAINER STATUS:[bold red] ERROR BUILD NODE [/bold red]") 
                        break
                    else:
                        console.print("CONTAINER STATUS:[bold red] GENERIC ERROR [/bold red]") 
