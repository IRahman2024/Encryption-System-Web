import sys
import os

path = '/home/IFTI784/Encryption-System-Web/backend'
if path not in sys.path:
    sys.path.append(path)

from main import app

# PythonAnywhere needs this
application = app