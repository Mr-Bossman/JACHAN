# ColorCat

## My LolCat clone

I got inspired by a program called [LolCat](https://github.com/busyloop/lolcat)
which does a similar thing. Unfortunalty I was dissapointed it was writen in ruby,
so I decided to re make it in GNU-style C. I crated this program mainly to
get more experience in GNU-style C. ColorCat allows users to create colored text
in a variety of different ANSI colors. Colorcat has suport for 3-bit 8-bit and soon
256 bit ANSI colors, which now work on Windows10. This can is an amazing for adding
visual appeal to your terminal. The program is easy to use and emulates Lolcat's behavior.
If you're looking to add a splash of color to a boring terminal with bold, vibrant text,
ColorCat has got you covered.

[github.com/Mr-Bossman/colorcat](https://github.com/Mr-Bossman/colorcat)

```
colorcat@colorcat:~$colorcat -h
+----------------------------------------+
| -h - This message.                     |
| -C - Only change whole line color.     |
| -r - Random line color.                |
| -R - All random color.                 |
| -5 - Dissable 8-bit mode.              |
| -s - Starting color in hue 360*.       |
| -a - Total shades to use.              |
| -A - Color shift amount for new lines. |
+----------------------------------------+
```

![Demo image 1](/images/colorcat3.png)
![Demo image 2](/images/colorcat1.png)
![Demo image 3](/images/colorcat2.png)
