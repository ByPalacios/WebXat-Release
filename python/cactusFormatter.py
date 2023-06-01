import sys
import platform
import os

def run():
    file_paths = [
                    "App/entrypoint.sh",
                    "App/status-deamon.sh"
                ]

    if platform.system() == "Windows":

        for i in range(len(file_paths)):
            file_path = file_paths[i]

            WINDOWS_LINE_ENDING = b'\r\n'
            UNIX_LINE_ENDING = b'\n'

            with open(file_path, 'rb') as open_file:
                content = open_file.read()  
            # Windows ➡ Unix
            content = content.replace(WINDOWS_LINE_ENDING, UNIX_LINE_ENDING)
            with open(file_path, 'wb') as open_file:
                open_file.write(content)
