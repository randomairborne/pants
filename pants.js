let reloaded = false;
function changeIntoPants() {
  const pathname = window.location.pathname;
  if (pathname.includes("/shorts/") && !reloaded) {
    const [[_, videocode]] = pathname.matchAll(/\/shorts\/(.*)/g);
    const destination = `https://www.youtube.com/watch?v=${videocode}`;
    console.debug(
      `PANTS: pathname: "${pathname}" video code: "${videocode}" destination: "${destination}"`,
    );
    reloaded = true;
    window.location = destination;
  } else if (!pathname.includes("/shorts/") && reloaded) {
    reloaded = false;
  }
}

setInterval(changeIntoPants, 50);
