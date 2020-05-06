// Get the modal
var modal = document.getElementById("myModal");

// Change the text of the modal based on which button was clicked
function modalContent(clicked_id) {
    if (clicked_id == "virus") {
        document.getElementById("malware-name").innerHTML = "Viruses";
        document.getElementById("malware-desc-1").innerHTML = "A computer virus is a malicious program that spreads by copying itself to a legitimate program or document. \
        Viruses are designed to damage your computer by corrupting system files, wasting resources, destroying data, etc.";
        document.getElementById("malware-desc-2").innerHTML = "Computer viruses can be contracted in many ways. They can be spread through email and text message attachments, \
        Internet file downloads, and scam links. Mobile devices, such as smartphones, can become infected with viruses through shady app downloads.";
        document.getElementById("malware-desc-3").innerHTML = "Once a virus has successfully attached to a program, file, or document, it will lie dormant until circumstances cause the device \
        to execute its code, such as running the infected program. A virus can perform a variety of malicious actions including stealing passwords or data, corrupting files, spamming email, slowing down computer performance, \
        and generally being a nuisance."
        document.getElementById("malware-tips").innerHTML = "You should use a trusted and up-to-date antivirus program that will detect and protect against computer viruses. Additionally, always exercise \
        caution when opening email and text message attachments, avoid shady websites or advertisements, and be careful when downloading files from the Internet."
    }
    else if (clicked_id == "trojan") {
        document.getElementById("malware-name").innerHTML = "Trojans";
        document.getElementById("malware-desc-1").innerHTML = "A Trojan horse or Trojan is a type of malware that is often disguised as legitimate software. Trojans can be employed by cyber-thieves and hackers trying to gain access to users' systems. \
        Users are typically tricked by some form of social engineering into loading and executing Trojans on their systems.";
        document.getElementById("malware-desc-2").innerHTML = "Some Trojans are specifically designed to trick you into using them. They can use misleading language or try to convince you they are a legitimate app. This is why it’s so important to watch \
        out for unsafe websites and never download things carelessly.";
        document.getElementById("malware-desc-3").innerHTML = "Once activated, Trojans can enable cyber-criminals to spy on you, steal your sensitive data, and gain backdoor access to your system. These actions can include deleting data, blocking data, \
        modifying data, copying data, disrupting the performance of computers or computer networks."
        document.getElementById("malware-tips").innerHTML = "To avoid getting infected with a Trojan horse, never download or install software from a source you do not trust completely. Never open an attachment or run a program sent to you in an email from someone you do not \
        know. Keep all software on your computer up to date with the latest patches. Make sure an antivirus is installed and running on your computer.";
    }
    else if (clicked_id == "worm") {
        document.getElementById("malware-name").innerHTML = "Worms";
        document.getElementById("malware-desc-1").innerHTML = "A worm is a malicious, self-replicating program that can spread throughout a network automatically. They  often utilize large amounts of memory and bandwidth, so infected servers, networks and individual systems \
        are often overloaded and stop responding."
        document.getElementById("malware-desc-2").innerHTML = "Worms can be transmitted via software vulnerabilities. Or computer worms could arrive as attachments in spam emails or instant messages (IMs). Once opened, these files could provide a link to a malicious website or \
        automatically download the computer worm. Once it is installed, the worm silently goes to work and infects the machine without the user’s knowledge."
        document.getElementById("malware-desc-3").innerHTML = "Worms can modify and delete files, and they can even inject additional malicious software onto a computer. Sometimes a computer worm’s purpose is only to make copies of itself over and over depleting system resources, \
        such as hard drive space or bandwidth, by overloading a shared network. In addition to wreaking havoc on a computer’s resources, worms can also steal data, install a backdoor, and allow a hacker to gain control over a computer and its system settings. "
        document.getElementById("malware-tips").innerHTML = "When browsing the web or using your computer, be sure to never download attachments unless you know exactly what they are and who they are from. Avoid free software from untrusted marketplaces. Be extremely cautious using P2P \
        file sharing. Do not click on ads, especially ones from brands and websites you are not familiar with.";
    }
    else if (clicked_id == "rootkit") {
        document.getElementById("malware-name").innerHTML = "Rootkits";
        document.getElementById("malware-desc-1").innerHTML = "Rootkits are a type of malware that are designed so that they can remain hidden on your computer. They give cybercriminals the ability to remotely control your computer. \
        Rootkits can do numerous things such as stealing your passwords and banking information, but there are different types of rootkits to look out for.";
        document.getElementById("malware-desc-2").innerHTML = "Because rootkits can hijack or subvert security software, they are especially hard to detect, making it likely that this type of malware could live on your computer for \
        a long time causing significant damage. Unfortunately, sometimes the only way to completely eliminate a well-hidden rootkit is to erase your computer’s operating system and rebuild from scratch. There are a numberof ways rootkits can get on your computer. \
        You might open an email and download a file that looks safe but is actually a virus. You might also accidentally download a rootkit through an infected mobile app."
        document.getElementById("malware-desc-3").innerHTML = "There are a variety of rootkits that perform different actions. Hardware/firmware rootkits are installed and infects the computer hard drive or the system BIOS letting \
        it intercept data coming from either. Bootloader rootkits are active as soon as you turn on the machine. Memory rootkits hide in the RAM of the computer, but can mostly go away after a simple reboot. Application rootkits \
        infect different files and programs on the computer giving the hacker access to the machine anytime one of them is opened or used while not changing how the file or program runs. Kernel mode rootkits target the OS of the computer \
        and hackers can add their own code to it making it run how they want it to.";
        document.getElementById("malware-tips").innerHTML = "There are many precautions a user can take to help prevent rootkits from hijacking their computer. Keeping your OS and other applications up to date is a simple way to help protect \
        yourself against rootkits. Refrain from opening unfamiliar emails, asammers are everywhere nowadays and try to get your information by sending suspicious emails with a link attached to it. Refrain from clicking on the links and delete \
        the emails. Don’t download files from unknown or untrustworthy sources. This can lead to a rootkit being installed onto your computer so make sure you where a file is from before opening it.";
    }
    else if (clicked_id == "spyware") {
        document.getElementById("malware-name").innerHTML = "Spyware";
        document.getElementById("malware-desc-1").innerHTML = "Spyware is malicious software designed to infiltrate your computer undetected and keep track of your internet usage, gain your passwords, and any other personal information.";
        document.getElementById("malware-desc-2").innerHTML = "You can get your computer infected with spyware by downloading from unreliable sources, opening unfamiliar emails, pirating movies or games, and even clicking on a pop-up \
        without reading what it says first.";
        document.getElementById("malware-desc-3").innerHTML = "While the functionality of any spyware threat depends on the intentions of its authors, they all share the same goal: gathering information. Password stealers are applications \
        that harvest passwords from infected computers. The types of collected passwords may include stored credentials from web browsers, system login credentials, and critical passwords. Banking Trojans are applications designed \
        to harvest credentials from financial institutions. They take advantage of vulnerabilities in browser security to modify web pages, modify transaction content, or insert additional transactions, all in a covert fashion invisible \
        to both the user and host web application. Infostealers are applications that scan infected computers and seek out a variety of information, including usernames, passwords, email addresses, browser history, log files, system information, \
        documents, spreadsheets, or other media files. Keyloggers are applications designed to capture computer activity, including keystrokes, websites visited, search history, email discussions, chatroom dialogue, and system credentials.";
        document.getElementById("malware-tips").innerHTML = "There are some precautions you can take to help prevent spyware for getting onto your computer. Don’t open emails from random or unfamiliar senders because this can get spyware on your \
        computer easily if you’re careless. Try not to download from unsecure or unreliable sources. Doing so could just download unneeded spyware. Make sure to read any pop-ups before clicking on them. Finally make sure to have a \
        reliable antivirus software installed on your computer and keep it up to date.";
    }
    else if (clicked_id == "ransomware") {
        document.getElementById("malware-name").innerHTML = "Ransomware";
        document.getElementById("malware-desc-1").innerHTML = "Ransomware, or ransom malware, is a type of malware that blocks a user's access to their \
        system or personal data unless a ransom is paid. Some types of ransomware may threaten to publish stolen data, such as sensitive files or personal photos.";
        document.getElementById("malware-desc-2").innerHTML = "Users can encounter ransomware in a number of ways. It can be downloaded onto a system when a user \
        visits a compromised or malicious website, arrive as a payload that is either dropped or downloaded by other malware, or delivered as attachments from spammed email.";
        document.getElementById("malware-desc-3").innerHTML = "Once ransomware has been executed in the system, it may lock the computer screen and/or encrypt files. \
        An image or notification may be displayed on the infected computer's screen and prevents victims from accessing their system. This also shows instructions for \
        how users can pay for the ransom. Ransomware that encrypts files will prevent access to potentially critical or valuable files, such as documents, spreadsheets, \
        and pictures.";
        document.getElementById("malware-tips").innerHTML = "To protect yourself against ransomware, you should use security software such as an antivirus program \
        that will detect and protect against threats. Additionally, you should keep your systems and software updated, as vulnerabilities in outdated software and \
        applications can be taken advantage of by ransomware. Any data you do not wish to lose, such as documents and photos, should be backed up on a regular basis, \
        either to an external storage device, or to the cloud. This ensures your data is still safe and available in the event of a ransomware attack. Learning how to \
        recognize malicious spam emails, suspicious websites, and other scams is a good preventative measure that will reduce the chances of ransomware infection. Finally, \
        you should never pay the ransom if you do get infected. There is no guarantee you will get your files back."
    }
    else if (clicked_id == "adware") {
        document.getElementById("malware-name").innerHTML = "Adware";
        document.getElementById("malware-desc-1").innerHTML = "Adware, or advertising-supported malware, is malware that presents unwanted advertisements on your screen, usually \
        within a web browser.";
        document.getElementById("malware-desc-2").innerHTML = "A system can become infected with adware when a user downloads a program. Some developers offer free software but \
        bundle it with adware from an adware vendor. Clicking on the ads generates revenue for the developer. Another way for adware to spread is by exploiting vulnerabilities in a \
        web browser to load the malicious code onto a user's system without their knowledge when they visit a website.";
        document.getElementById("malware-desc-3").innerHTML = "Streams of pop-up advertisements can slow down your computer's processor and take up lots of memory space, which may \
        cause decreased system performance, program crashes, and your device to freeze up at times. You might find that websites you typically visit aren't displaying properly, \
        website links redirecting you to sites that are different from what you expected, or new toolbars, extensions, and plugins suddenly populating your web browser. \
        Additionally, some adware may change your web browser's homepage, in order to redirect you to a new page that might then install more adware and potentially other forms of \
        malware on your computer.";
        document.getElementById("malware-tips").innerHTML = "Be careful when downloading and installing any new software. Whenever possible, only download apps from the official app \
        store for your operating system, such as the Google Play store for Android devices or the Microsoft Store for Windows devices. Avoid torrent sites, illegal downloads, and never \
        download or open an app from an unknown source. Pay close attention to website URLs to make sure they're spelled correctly, use an ad blocker or avoid clicking on infected pop-ups \
        or banner ads, and use caution before opening an email attachment. Some forms of adware can simply be uninstalled as a program or web browser extension, but it's a good practice \
        to use antivirus software to help you detect and remove adware from your computer.";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
