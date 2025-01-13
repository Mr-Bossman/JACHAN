# [Linux on a Raspberry Pi Pico 2](https://github.com/Mr-Bossman/pi-pico2-linux)

After hearing the soon-to-be-released [Raspberry Pi Pico 2](https://www.raspberrypi.com/products/raspberry-pi-pico-2/)'s (RP2350) specs online, I realized it should be possible to run Linux on it.
I started working on the project, making an [initial Buildroot project](https://github.com/Mr-Bossman/pi-pico2-linux) using noMMU RISC-V. When I got access to the datasheet I added basic UART and Timer support.
I also started making a simple bootloader immediately after the SDK was released. I even got code from Sparkfun for their PSRAM demo, as there was no example code for the QMI (QSPI Memory Interface) because there were no examples on launch day.
When the [Sparkfun Pi Pico 2](https://www.sparkfun.com/sparkfun-pro-micro-rp2350.html) arrived, my code surprisingly worked on the first try, and I saw Linux attempt to boot. Unfortunately, Attomics didn’t work correctly on some memory regions so I had to patch Atomics out of the kernel.
While I was working on the project, I was posting screenshots of my progress on an [embedded engineering Discord server](https://discord.gg/embedded). Somehow soon after I started seeing news articles about myself. I thought this was absolutely insane and I am most proud of getting on the riscv.org website. Soon after I finished and did get the Pi Pico to boot into bash.
Unfortunately, UART wasn't working correctly. After a bit, [Carsten Thiele](https://github.com/cathiele) noticed this issue and fixed the interrupt controller, which finished the project fully!
I still want to add support for an SD card and maybe other peripherals. I also want to make a custom board to swap out the SPI NOR to PSRAM so there is more space for userland programs to run in.

![Image of boot](https://raw.githubusercontent.com/Mr-Bossman/pi-pico2-linux/refs/heads/master/images/booting.png)
![SparkFun Pro Micro - RP2350](https://www.sparkfun.com/media/catalog/product/D/E/DEV-24870-Pro-Micro-RP2350-Feature.jpg)
