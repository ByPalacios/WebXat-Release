import sys, json, os
sys.path.append('./python')

try:
    # Cargar el archivo JSON en un diccionario
    with open('ruinett-config.json', 'r') as f:
        conf = json.load(f)

    # Extraer el valor de la clave 'FIRES_TIME'
    fires_time = conf['FIRST_TIME']

    if (fires_time == "yes"):
        import install
        install.InstallLibraries(sys.platform)
    else:
        import builder, cactusFormatter
        cactusFormatter.run()
        builder

        

except FileNotFoundError:
    import config, install
    config.run(sys.platform)
    install.InstallLibraries(sys.platform)
    install.DisablePreInstall()
