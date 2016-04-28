f![Logo](admin/piface.png)
# ioBroker.piface

This adapter allows to control a Piface on Raspberry Pi .

It uses node-pifacedigial: https://github.com/tualo/node-pifacedigital

The adapter creates 8 input and output objects in iobroker.
The outputs can controlled by buttons from VIS or by setting the object to
"true" or "false" or "1" or "0".

### ! Attention !
Please read the pre requirements of adapter.
You have to install by console the following libraries and enable SPI support of Raspberry
by setting up in "raspi-config"

```
git clone https://github.com/piface/libmcp23s17.git
cd libmcp23s17/
make
sudo make install
```

```
git clone https://github.com/piface/libpifacedigital.git
cd libpifacedigital/
make
sudo make install
```

If you run in errors, because your node version is too low, please update the node version.
* I installed successfully with node version: v4.2.1

### Settings in iobroker
![Alt text](admin/settings.png?raw=true "settings")
## PiFace board number

You can stack up to 4 boards on one Raspberry Pi. You must address the board with the jumper.
To address the boards use the following jumper settings:
* Board number  JP1   JP2
* 0             0     0
* 1             1     0
* 2             0     1
* 3             1     1

## PiFace read input in ms
This value define the interval to check the inputs. Value is in ms.

## Inverse inputs
You can inverse the inputs

## Initialize outputs
If this is checked, the outputs will be set to 0 by restarting the adapter.

To DO:
- Testing Multi-Host

## ChangeLog

### 0.0.40
* (Eisbaeeer) RC
added:
* addressing boards

### 0.0.30
* (Eisbaeeer) first aplpha
added:
* Read interval in setup (ms)
* Selectable invers input (pullup)

### 0.0.20
* (Eisbaeeer) first beta

### 0.0.10
* (Eisbaeeer) initial version

