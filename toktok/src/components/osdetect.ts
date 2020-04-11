const qtoxVersion = "v1.16.3";

/* Arch detection */
const arch = (() => {
  if (typeof window === "undefined") {
    return 0;
  }

  // If 64 is declared
  if (
    window.navigator.userAgent.indexOf("WOW64") != -1 ||
    window.navigator.userAgent.indexOf("x86_64") != -1 ||
    window.navigator.userAgent.indexOf("x64;") != -1 ||
    window.navigator.userAgent.indexOf("Win64") != -1 ||
    window.navigator.userAgent.indexOf("AMD64") != -1
  ) {
    return 64;
  }

  // If 32 is declared
  if (
    window.navigator.userAgent.indexOf("i386") != -1 ||
    window.navigator.userAgent.indexOf("i686") != -1
  ) {
    return 32;
  }

  // If the OS is Windows and neither is declared we know it's 32
  if (window.navigator.userAgent.indexOf("Windows") != -1) {
    return 32;
  }
  return 0;
})();

function qtoxRelease(file) {
  return `https://github.com/qTox/qTox/releases/download/${qtoxVersion}/${file}`;
}

export function detectOS() {
  /* OS detection (order matters) */

  if (typeof window === "undefined") {
    return {
      name: "Unknown",
      client: {
        icon: "download",
        link: "#download-icons",
      },
    };
  }

  if (window.navigator.userAgent.indexOf("Mac") != -1) {
    return {
      name: "Mac",

      client: {
        icon: "download",
        link: qtoxRelease("qTox.dmg"),
      },
    };
  }

  if (
    window.navigator.userAgent.indexOf("iPad") != -1 ||
    window.navigator.userAgent.indexOf("iPhone") != -1
  ) {
    return {
      name: "iOS",

      client: {
        icon: "external-link",
        link: "https://itunes.apple.com/app/antidote-for-tox/id933117605",
      },
    };
  }

  if (window.navigator.userAgent.indexOf("FreeBSD") != -1) {
    return {
      name: "FreeBSD",

      client: {
        icon: "external-link",
        link: "https://www.freshports.org/net-im/qTox",
      },
    };
  }

  if (window.navigator.userAgent.indexOf("Android") != -1) {
    return {
      name: "Android",

      client: {
        icon: "external-link",
        link: "https://play.google.com/store/apps/details?id=chat.tox.antox",
      },
    };
  }

  if (window.navigator.userAgent.indexOf("Windows") != -1) {
    if (arch == 64) {
      return {
        name: "Windows",
        client: {
          icon: "download",
          link: qtoxRelease("setup-qtox-x86_64-release.exe"),
        },
      };
    } else {
      return {
        name: "Windows",
        client: {
          icon: "download",
          link: qtoxRelease("setup-qtox-i686-release.exe"),
        },
      };
    }
  }

  if (window.navigator.userAgent.indexOf("Windows Phone") != -1) {
    // We don't have a windows phone client?!??
  }

  return {
    name: "Unknown",
    client: {
      icon: "download",
      link: "#download-icons",
    },
  };
}
