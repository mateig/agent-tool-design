"use strict";

const copyButton = document.getElementById("copy-citation");
const citation = document.getElementById("citation");
const copyStatus = document.getElementById("copy-status");

copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyStatus.textContent = "Citation copied.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Select and copy the citation above.";
  }
});

const videos = Array.from(document.querySelectorAll("video"));
for (const video of videos) {
  video.addEventListener("play", () => {
    for (const other of videos) {
      if (other !== video) other.pause();
    }
  });
}
