f![Logo](admin/piface.png)
# ioBroker.piface

This adapter allows to control a Piface on Raspberry Pi .

It uses node-pifacedigial: https://github.com/tualo/node-pifacedigital

The adapter creates 8 input and output objects in iobroker.
The outputs can controlled by buttons from VIS or by setting the object to
"true" or "false" or "1" or "0".

### Attention
Please read the pre requirements of adapter
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

To DO:
- Addressing the Piface to use more than one board
- Read interval in setup (ms)
- Selectable invers input (pullup)

## ChangeLog

### 0.0.20
* (Eisbaeeer) first beta

### 0.0.10
* (Eisbaeeer) initial version

