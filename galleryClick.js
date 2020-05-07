function galleryClick() {
    // Get the expanded tab
    var expandTab = document.getElementById("expandedTab");
    // Show the container element (hidden with CSS)
    expandTab.parentElement.style.opacity = "1";
}

// Displays information based on which image was clicked
function tabContent(clicked_id) {
    if (clicked_id == "phishing") {
        document.getElementById("attack-name").innerHTML = "Phishing";
        document.getElementById("attack-desc-1").innerHTML = "Phishing is one of the most common types of social engineering and occurs through email, web, phone \
        or in-person. Attackers pose as trustworthy organizations or individuals in order to solicit personal or sensitive information from victims.";
        document.getElementById("attack-desc-2").innerHTML = "For example, they may send an email that appears to be from a reputable credit card company or financial \
        institution, requesting account details, suggesting there is a problem. When a user responds with the requested information, the attacker can use it to gain access \
        to their account. Some common indicators of phishing email attempts include a sender’s email address closely resembling one from a reputable company, generic greetings \
        and signature, spoofed hyperlinks and websites, incorrect spelling and inconsistent layout, and suspicious attachments.";
        document.getElementById("attack-desc-3").innerHTML = "A good practice is to visit the organization’s website or contact their official phone number for customer \
        service when information is requested from you. As a general rule of thumb, to determine if a request is legitimate, try to verify it by contacting the organization directly.";
    }
    else if (clicked_id == "pretexting") {
        document.getElementById("attack-name").innerHTML = "Pretexting";
        document.getElementById("attack-desc-1").innerHTML = "Pretexting is another form of social engineering where an attacker creates a good pretext, \
        or fabricates a scenario, that is used to try and steal victims’ personal information. Scammers will impersonate individuals who can be perceived as \
        having authority or a right-to-know over a victim, such as police officers, bankers, tax authorities, insurance investigators, etc. In these types of \
        attackers, an attacker usually says they need some information from their target, when in actuality, this data is used to commit identity theft or stage \
        secondary attacks.";
        document.getElementById("attack-desc-2").innerHTML = "For example, a scammer may pose as an employee working for a victim’s Internet Service Provider. \
        They call and inform the victim that a previous attempt to retrieve funds via direct debit has failed, and if the customer is confident there is sufficient \
        funds, then the “ISP” would like to check if it’s a problem on their end. The “ISP” would like to confirm the bank account number used and retry the transaction \
        while the customer is on the phone. They will amend their records accordingly if the transaction is successful.";
        document.getElementById("attack-desc-3").innerHTML = "Unlike phishing attacks, which rely on fear and urgency, pretexting attacks require a false sense of trust to \
        be built with the victim. The attacker needs to build a credible story that leaves little room for doubt for their target. Again, as a precaution, to avoid giving out \
        sensitive information to the wrong people, always contact the organization directly whenever you receive a request for information, in order to confirm its validity.";
    }
    else if (clicked_id == "quidproquo") {
        document.getElementById("attack-name").innerHTML = "Quid Pro Quo";
        document.getElementById("attack-desc-1").innerHTML = "Similar to baiting attacks, quid pro quo attacks offer some sort of benefit in exchange for information. These \
        benefits usually assume a form of service, rather than taking the form of a good like baiting attacks.";
        document.getElementById("attack-desc-2").innerHTML = "A common quid pro quo attack involves fraudsters impersonating technical support. These bad actors call random numbers \
        and will eventually reach a person with a legitimate problem and who is grateful that someone is calling back to help them. In order to help “solve” their problem, the attacker \
        will have the user type commands that give them access or launch malware.";
        document.getElementById("attack-desc-3").innerHTML = "With the quid pro quo scheme, as the old saying goes, “If it’s too good to be true, it probably is.” Be wary of what someone \
        is requesting from you when offering their services. Fraudsters impersonating IT support technicians may ask for your login details, ask you to disable your antivirus software, or install a program they send you.";
    }
    else if (clicked_id == "baiting") {
        document.getElementById("attack-name").innerHTML = "Baiting";
        document.getElementById("attack-desc-1").innerHTML = "Baiting is similar to a real-world version of a Trojan horse. \
        Baiting attacks use a false promise that piques a victim’s greed or curiosity. This could be a promise of an item or \
        good used to entice victims. Users are led into a trap that steals their personal information or infects their systems with malware.";
        document.getElementById("attack-desc-2").innerHTML = "Baiters may use an offer of free music or movie downloads or enticing ads that \
        trick users into downloading a malware-infected application or handing over their login credentials.";
        document.getElementById("attack-desc-3").innerHTML = "Additionally, baiting attacks are not confined to the digital world. Attackers \
        can also exploit human curiosity using physical media. Malware-infected flash drives are popularly used by baiters and left in areas where \
        potential victims are likely to see them, such as bathrooms, elevators, or parking lots. Victims pick up the flash drive and insert it into a \
        work or home computer, resulting in the installation of malware.";
    }
    else if (clicked_id == "tailgating") {
        document.getElementById("attack-name").innerHTML = "Tailgating";
        document.getElementById("attack-desc-1").innerHTML = "Tailgating, also known as piggybacking, is a form of social engineering attack that’s almost \
        exclusively physical. In this type of attack, an attacker without the proper authentication asks for access to a restricted area of an organization’s \
        physical or digital space.";
        document.getElementById("attack-desc-2").innerHTML = "In one scenario, an attacker may impersonate a delivery driver and wait outside a building. When an \
        employee gains approval to enter and opens the door, the attacker asks the employee to “hold the door”, using excuses like forgetting their access or identity card, in order to gain access to the building.";
        document.getElementById("attack-desc-3").innerHTML = "In midsize to large companies, an attacker may use the fact that an employee will not know everyone working \
        at the facility to strike up a conversation and use this show of familiarity to get past the front desk. In any case, these bad actors rely on common courtesy to \
        override the uninitiated’s sense of security to spurn victims into opening the door for unauthorized individuals.";
    }
}