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

const defaultClient = {
  name: "Unknown",
  client: {
    icon: "download",
    link: "#download-icons",
  },
};

const clients = [
  {
    userAgents: ["Mac"],
    result: {
      name: "Mac",

      client: {
        icon: "download",
        link: qtoxRelease("qTox.dmg"),
      },
    },
  },
  {
    userAgents: ["FreeBSD"],
    result: {
      name: "FreeBSD",

      client: {
        icon: "external-link",
        link: "https://www.freshports.org/net-im/qTox",
      },
    },
  },
  {
    userAgents: ["Linux"],
    result: {
      name: "Linux",

      client: {
        icon: "external-link",
        link: "https://flathub.org/apps/details/io.github.qtox.qTox",
      },
    },
  },
  {
    userAgents: ["iPad", "iPhone"],
    result: {
      name: "iOS",

      client: {
        icon: "external-link",
        link: "https://itunes.apple.com/app/antidote-for-tox/id933117605",
      },
    },
  },
  {
    userAgents: ["Android"],
    result: {
      name: "Android",

      client: {
        icon: "external-link",
        link: "https://play.google.com/store/apps/details?id=chat.tox.antox",
      },
    },
  },
  {
    userAgents: ["Windows"],
    result: {
      32: {
        name: "Windows",
        client: {
          icon: "download",
          link: qtoxRelease("setup-qtox-i686-release.exe"),
        },
      },
      64: {
        name: "Windows",
        client: {
          icon: "download",
          link: qtoxRelease("setup-qtox-x86_64-release.exe"),
        },
      },
    },
  },
];

export function detectOS() {
  /* OS detection (order matters) */

  if (typeof window === "undefined") {
    return defaultClient;
  }

  const client =
    clients.find((client) =>
      client.userAgents.find(
        (ua) => window.navigator.userAgent.indexOf(ua) != -1
      )
    ) || defaultClient;
  if (64 in client.result) {
    if (arch === 64) {
      return client.result[64];
    }
    return client.result[32];
  }
  return client.result;
}
