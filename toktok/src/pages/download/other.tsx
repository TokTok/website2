import * as React from "react";
import Layout from "../../layouts/main";

const Page = () => (
  <Layout>
    <div id="download" className="section noover download-bg">
      <section
        id="oses"
        className="features container text-center customwidget"
      >
        <h1>All Platforms:</h1>
        <br />
        <div className="container-fluid limit-width">
          <div className="row">
            <div className="col-sm-4 feature">
              <img src="/images/plat/windows_dark.svg" class="dark" />
              <img src="/images/plat/windows.svg" class="light" />
              <h2>Windows</h2>
              <p className="lead">
                qTox stable:{" "}
                <a href="https://github.com/qTox/qTox/releases/download/v1.16.3/setup-qtox-i686-release.exe">
                  32 bit
                </a>{" "}
                /{" "}
                <a href="https://github.com/qTox/qTox/releases/download/v1.16.3/setup-qtox-x86_64-release.exe">
                  64 bit
                </a>
              </p>
              <p className="lead">
                qTox nightly:{" "}
                <a href="https://github.com/qTox/qTox-nightly-releases/releases/download/ci-master-latest/qtox-i686-release.zip">
                  32 bit
                </a>{" "}
                /{" "}
                <a href="https://github.com/qTox/qTox-nightly-releases/releases/download/ci-master-latest/qtox-x86_64-release.zip">
                  64 bit
                </a>
              </p>
              <p className="lead">
                uTox stable:{" "}
                <a href="https://downloads.utox.io/stable/uTox_win32.exe">
                  {" "}
                  32 bit
                </a>{" "}
                /{" "}
                <a href="https://downloads.utox.io/stable/uTox_win64.exe">
                  64 bit
                </a>
              </p>
            </div>

            <div className="col-sm-4 feature">
              <img src="/images/plat/mac_dark.svg" class="dark" />
              <img src="/images/plat/mac.svg" class="light" />
              <h2>OS X</h2>
              <p className="lead">
                <a href="https://github.com/qTox/qTox/releases/download/v1.16.3/qTox.dmg">
                  qTox
                </a>
              </p>
              <p className="lead">
                <a href="https://github.com/uTox/uTox/releases/download/v0.17.0/uTox.0.17.0.dmg">
                  uTox 64 bit (OS X 10.7+)
                </a>
              </p>
            </div>

            <div className="col-sm-4 feature">
              <img src="/images/plat/linux_dark.svg" class="dark" />
              <img src="/images/plat/linux.svg" class="light" />
              <h2>Linux</h2>
              <p className="lead">
                Please check in the package repository of your distribution.
              </p>
              <p className="lead">
                <a href="https://flathub.org/apps/details/io.github.qtox.qTox">
                  qTox on Flathub
                </a>
              </p>
              <p className="lead">
                qTox AppImage:{" "}
                <a href="https://github.com/qTox/qTox/releases/download/v1.16.3/qTox-v1.16.3.x86_64.AppImage">
                  64 bit
                </a>
              </p>
              <p className="lead">
                Toxic nightly, mostly static:{" "}
                <a href="https://build.tox.chat/job/toxic_build_linux_x86_release/lastSuccessfulBuild/artifact/toxic_build_linux_x86_release.tar.xz">
                  32 bit
                </a>{" "}
                /{" "}
                <a href="https://build.tox.chat/job/toxic_build_linux_x86-64_release/lastSuccessfulBuild/artifact/toxic_build_linux_x86-64_release.tar.xz">
                  64 bit
                </a>
              </p>
              <p className="lead">
                Toxic nightly, fully static, but without audio/video:{" "}
                <a href="https://build.tox.chat/job/toxic-no-x11-musl_build_linux_x86_release/lastSuccessfulBuild/artifact/toxic-no-x11-musl_build_linux_x86_release.tar.xz">
                  32 bit
                </a>{" "}
                /{" "}
                <a href="https://build.tox.chat/job/toxic-no-x11-musl_build_linux_x86-64_release/lastSuccessfulBuild/artifact/toxic-no-x11-musl_build_linux_x86-64_release.tar.xz">
                  64 bit
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 feature">
              <img src="/images/plat/freebsd_dark.svg" class="dark" />
              <img src="/images/plat/freebsd.svg" class="light" />
              <h2>FreeBSD</h2>
              <p className="lead">
                <a href="https://www.freshports.org/net-im/qTox">
                  qTox on Freshports
                </a>
              </p>
              <p className="lead">
                <a href="https://www.freshports.org/net-im/uTox">
                  uTox on Freshports
                </a>
              </p>
              <p className="lead">
                <a href="https://www.freshports.org/net-im/toxic">
                  Toxic on Freshports
                </a>
              </p>
            </div>

            <div className="col-sm-4 feature">
              <img src="/images/plat/ios_dark.svg" class="dark" />
              <img src="/images/plat/ios.svg" class="light" />
              <h2>iOS</h2>
              <p className="lead">
                <a href="https://itunes.apple.com/app/antidote-for-tox/id933117605">
                  Antidote (iOS 8+)
                </a>
              </p>
            </div>

            <div className="col-sm-4 feature">
              <img src="/images/plat/android_dark.svg" class="dark" />
              <img src="/images/plat/android.svg" class="light" />
              <h2>Android</h2>
              <p className="lead">
                Antox: <a href="#fdroid">F-Droid</a> /{" "}
                <a href="https://play.google.com/store/apps/details?id=chat.tox.antox">
                  Google Play
                </a>{" "}
                / <a href="https://pkg.tox.chat/fdroid/repo/antox.apk">APK</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Page;
