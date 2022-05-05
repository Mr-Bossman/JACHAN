# i.MXRT1050 Linux
## My journey porting Linux to a no-MMU SOC

# ![iMXRT1050-evk](https://www.nxp.com/assets/images/en/dev-board-image/IMX_RT1050-EVKB_TOP-LR.jpg)

# [My Linux contributions](https://github.com/torvalds/linux/commits?author=Mr-Bossman&since=2021-11-01) 

### After I was contempt with the F1C100s I decided I wanted to do more with embedded Linux.

I went around the internet looking for a SOC that was capable of running Linux I soon came across the Teensy4.
I happened to have a Teensy4 from another project I was doing although, when I tried to debug it using SWD/JTAG I found out the JTAG pins were being used by the Teensy's on-board programmer which could not be removed. I then proceeded to buy NXP's development board. After compiling [Giulio's U-Boot](https://github.com/giuliobenetti/u-boot-imxrt) branch I found out that the system timer (GPT timer) was not configured. I then decided to email Giulio about it, he helped me add it to U-boot although most everything else was done. I then started working on the Linux half by copying Giulio's Linux Repo unfortunate it was all just copies of U-Boot or existing Linux files. I then configured the Linux's load address and some other important KConfig variables.
Unfortunately, I could not get compressed images to work with either U-boot's uImage or Linux's zImage I eventually found that making an uncompressed uImage would fix this, later I found this was caused by wrong load addresses. After debugging for many hours I slowly added perennials as they were loaded by the Linux kernel. After many weeks I got Linux to boot properly. I then squashed my commits and made them "Linux Ready". I then had Giulio Benetti review my patches and help me learn to submit them. I have to give an amazing thanks to Giulio for helping me along the way, he has taught me a lot about the Linux kernel and I hope to see him on my trip to Italy in the summer of 2022.

## [Giulio's Github](https://github.com/giuliobenetti)

## [My Linux fork](https://github.com/Mr-Bossman/linux)

<style>
#my-linux-contributions{
	text-align: center;
}
#imxrt1050-evk{
	text-align: center;
}
img[alt=iMXRT1050-evk] {
	width: 45rem;
}
</style>