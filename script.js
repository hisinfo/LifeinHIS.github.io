const flipContainers = document.querySelectorAll(".flip-container");
const threshold = 250; // 반응 거리

flipContainers.forEach((flipContainer) => {
  const hoverImage = flipContainer.querySelector(".hover-image");
  const defaultPosition = { x: 0, y: 0 };

  let isFollowing = false;

  document.addEventListener("mousemove", (e) => {
    const flipRect = flipContainer.getBoundingClientRect();
    const flipCenterX = flipRect.left + flipRect.width / 2;
    const flipCenterY = flipRect.top + flipRect.height / 2;

    const distance = Math.sqrt(
      (e.clientX - flipCenterX) ** 2 + (e.clientY - flipCenterY) ** 2
    );

    if (distance < threshold) {
      isFollowing = true;
      const offsetX = (e.clientX - flipCenterX) / 2;
      const offsetY = (e.clientY - flipCenterY) / 2;

      hoverImage.style.transform = `translate(${
        defaultPosition.x + offsetX
      }px, ${defaultPosition.y + offsetY}px)`;
    } else if (isFollowing) {
      isFollowing = false;
      hoverImage.style.transition = "transform 0.5s ease-out";
      hoverImage.style.transform = `translate(${defaultPosition.x}px, ${defaultPosition.y}px)`;
    }
  });

  document.addEventListener("mouseleave", () => {
    isFollowing = false;
    hoverImage.style.transition = "transform 0.5s ease-out";
    hoverImage.style.transform = `translate(${defaultPosition.x}px, ${defaultPosition.y}px)`;
  });
});
