#!/bin/bash
if [ -e /etc/X11/xorg.conf.laptop ] 
then 
    sudo mv /etc/X11/xorg.conf /etc/X11/xorg.conf.hdmi 
    sudo mv /etc/X11/xorg.conf.laptop /etc/X11/xorg.conf 
fi
