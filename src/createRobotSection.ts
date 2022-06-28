function createRobotSection(robot: Robot): void {
    const sections = document.querySelectorAll(".factory-section") as NodeListOf<HTMLDivElement>;
  
    const robotType = robot.Type === 0 ? "Male" : "Female"

    const section: HTMLDivElement = document.createElement("div");
    section.className = "factory-section";
    section.classList.add("slide");
    section.id = `slide-${sections.length+1}`;
  
    const header: HTMLHeadingElement = document.createElement("h2");
    header.textContent = `${robotType} Robot`;
  
    const contentWrapper: HTMLDivElement = document.createElement("div");
    contentWrapper.className = "content-wrapper";
  
    const robotContainer: HTMLDivElement = document.createElement("div");
    robotContainer.className = "robot-container";
  
    robotContainer.classList.toggle(robotType === "Male" ? "male" : "female");
    if (robot.Jump == true) {
      robotContainer.classList.toggle("can-jump");
    }
    if (robot.Talk == true) {
      robotContainer.classList.toggle("can-talk");
    }
    if (robot.Blink == true) {
      robotContainer.classList.toggle("can-blink");
    }
  
    const head: HTMLDivElement = document.createElement("div");
    head.classList.add("head");
    head.classList.add("pulse3");
    head.classList.add("neon3");
    const leftEye: HTMLDivElement = document.createElement("div");
    leftEye.className = "left-eye";
    const rightEye: HTMLDivElement = document.createElement("div");
    rightEye.className = "right-eye";
    const mouth: HTMLDivElement = document.createElement("div");
    mouth.className = "mouth";
    mouth.classList.add("scale");
    head.appendChild(leftEye);
    head.appendChild(rightEye);
    head.appendChild(mouth);
  
    const leftHand: HTMLDivElement = document.createElement("div");
    leftHand.className = "left-hand";
    leftHand.classList.add("twist1");
    leftHand.classList.add("neon3");
    const rightHand: HTMLDivElement = document.createElement("div");
    rightHand.className = "right-hand";
    rightHand.classList.add("twist11");
    rightHand.classList.add("neon3");
  
    const leftLeg: HTMLDivElement = document.createElement("div");
    leftLeg.className = "left-leg";
    leftLeg.classList.add("twist1");
    leftLeg.classList.add("neon3");
    const rightLeg: HTMLDivElement = document.createElement("div");
    rightLeg.className = "right-leg";
    rightLeg.classList.add("twist11");
    rightLeg.classList.add("neon3");
  
    const body: HTMLDivElement = document.createElement("div");
    body.className = "body";
    body.classList.add("neon3");
    body.style.backgroundColor = robot.Color;
  
    const name: HTMLDivElement = document.createElement("p");
    name.className = "robot-name";
    name.textContent = robot.Name;
  
    const bubble: HTMLDivElement = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.classList.add("bubble-bottom-left");
    bubble.textContent = robot.Phrase;
  
    const robotWrapper: HTMLDivElement = document.createElement("div");
    robotWrapper.classList.add("robot");
    robotWrapper.classList.add("pulse");

    robotWrapper.appendChild(head);
    robotWrapper.appendChild(leftHand);
    robotWrapper.appendChild(rightHand);
    robotWrapper.appendChild(leftLeg);
    robotWrapper.appendChild(rightLeg);
    robotWrapper.appendChild(body);
    robotWrapper.appendChild(name);
    robotWrapper.appendChild(bubble);

    robotContainer.appendChild(robotWrapper);
  
    const content: HTMLDivElement = document.createElement("div");
    content.className = "content";
  
    const sendMessage: HTMLDivElement = document.createElement("div");
    sendMessage.className = "send-message";
    const l: HTMLLabelElement = document.createElement("label");
    l.textContent = "Send Message:";
    const i: HTMLInputElement = document.createElement("input");
    i.type = "text";
    i.placeholder = "write message here";
    const b: HTMLButtonElement = document.createElement("button");
    b.innerHTML = "Send";
    sendMessage.appendChild(l);
    sendMessage.appendChild(i);
    sendMessage.appendChild(b);
  
    const receivedMessages: HTMLDivElement = document.createElement("div");
    receivedMessages.className = "received-messages";
    const h: HTMLDivElement = document.createElement("div");
    h.className = "header";
    const p: HTMLParagraphElement = document.createElement("p");
    p.className = "header-last-message";
    p.textContent = "Last messages";
    h.appendChild(p);
    const divMessages: HTMLDivElement = document.createElement("div");
    divMessages.className = "messages";
    receivedMessages.appendChild(h);
    receivedMessages.appendChild(divMessages);

    const b1: HTMLButtonElement = document.createElement("button");
    b1.innerHTML = "Show Last Messages";
    b1.addEventListener("click", () => {
      chatManager.ShowLastMessages()
    }, false);

    const b2: HTMLButtonElement = document.createElement("button");
    b2.innerHTML = "Show First Messages";
    b2.addEventListener("click", () => {
      chatManager.ShowFirstMessages();
    }, false);

    const buttonContainer: HTMLDivElement = document.createElement("div");
    buttonContainer.className = "message-buttons";
    buttonContainer.appendChild(b1);
    buttonContainer.appendChild(b2);
  
    content.appendChild(sendMessage);
    content.appendChild(receivedMessages);
    content.appendChild(buttonContainer);
  
    contentWrapper.appendChild(robotContainer);
    contentWrapper.appendChild(content);
  
    section.appendChild(header);
    section.appendChild(contentWrapper);
  
    const buttons = document.querySelector(".buttons") as HTMLDivElement;
    buttons.style.display = "inline-block";
  
    buttons.before(section);
  
  
    GetSection(section.id);
  
    showSlide(currentSlide = sections.length + 1);

    chatManager.ShowAllMessages(chatManager.Messages);
  
  }
  
  
  
  function GetSection(id: string): void {
    const sect = document.querySelector(`#${id}`) as HTMLDivElement;
    const button = sect.querySelector("button") as HTMLButtonElement;
    button.onclick = function() {chatManager.ShowCreatedMessage(sect)};
  }
  
  