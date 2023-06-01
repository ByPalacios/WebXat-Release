import json, sys, os
sys.path.append('./python')

def InstallLibraries(system):
    
    if ( system.startswith("win")):
        try:
            os.system("curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py")
            os.system("python get-pip.py")
            try:
                os.system("pip install rich")
            except Exception as e:
                print("Error: Add Pip to Windows Environment Variables")
                sys.exit(0)
        except Exception as e:
            print("Error: could not download pip, please visit their website and download it \n https://bootstrap.pypa.io/get-pip.py")
            sys.exit(0)
        import cactusFormatter
        cactusFormatter.run()
        DisablePreInstall()
    
    elif ( system.startswith("linux")):  
        try:
            os.system("sudo pacman -Syu")
            os.system("sudo pacman -S --noconfirm python-pip")
        except Exception as e:
            os.system("sudo apt update && sudo apt upgrade -y")
            os.system("sudo apt install python3-pip -y")
            os.system("pip install rich")
        os.system("pip install rich")
        DisablePreInstall()
    
    else:
        try:
            os.system("sudo brew update")
            os.system("sudo brew install python3 -y")
            os.system("sudo brew postinstall python3 -y")
            os.system("sudo pip3 install rich")
            DisablePreInstall()
        except Exception as e:
            os.system("echo \"Error instalation in MAC\"")
        
    


def DisablePreInstall():
    # Disable Install Function
    with open('ruinett-config.json', 'r') as f:
        config = json.load(f)

    # edit the data
    config['FIRST_TIME'] = 'no'

    # write it back to the file
    with open('ruinett-config.json', 'w') as f:
        json.dump(config, f)
    
    import builder
    builder