const data = {
  cats: [
    {
      name: "Kity",
      images: [
        "https://lh3.googleusercontent.com/pw/ADCreHdqumCVs_bVJdar2IyWpmF6P1d2IjgsorPsS7y1Q2nGvmU9LPmUgqBGF-KJX0fXJVTKp31ONBhn82pk2QltpyO5xI39Vc-knjTXvNEjMCD5wrsNaiYyOvF7dZ43P2BTTIW8EL9tKaEOFfQceqtzuO-u=w800-h532-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/ADCreHfmxrQ2cuZ3uHWgx8IM7N8VDGTBU9HInuiufp0UAatGdzgPFiY48b4sgBZGdfsNcvlChu_gTzA1jiwI2UtQu3gfyA98E1YMzZY9GWoq-q6Rqk7iji1KLz91Kn7iuJoZEGyAwTtjEbOhl1EujdBN01jW=w800-h532-s-no?authuser=0",
      ],
      count: 0,
    },
    {
      name: "Fluffy",
      images: [
        "https://lh3.googleusercontent.com/pw/ADCreHcm7twY4qkAAqTL4OSgOjmIC85mCncWP7GYUBtpX6vRcjqAnGxWOVOMTLr1RV1uFwks3amkr2SdNw4EzSE_3ttcQHQXNA86sTaJBa2bVrbB_BybPkNFN_WQzVpwooLs5J901nnwZYsJpBtVQtl5UoU=w800-h533-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/ADCreHfq_edAmcxrrHs9ni64_o_vHWGeTfvF1PvSjuyUCwd9bjsvayRgVIe7pTu6hGGcDBENCAdnfWE1ce4dtEOpP1H6r2Us1zD_QnDQ3s_pXnlNoucKRQT-0LTxiOzKfXKYKI-448_Bszz1fklc2UBDopw=w800-h533-s-no?authuser=0",
      ],
      count: 0,
    },
    {
      name: "Flynn",
      images: [
        "https://lh3.googleusercontent.com/pw/ADCreHe-h-RBtwo-UGt-c_Xa1LnQmIZXdzn4jH8ZYgC496YubuTvRtuOyRUvaYdOySLsjxrSl2GLfzjp-1vYUTs6XH61SEVTjjk2BnYgjAS8qD56mcIy0gY9cyker3XbKge3KS-LNrTubXQFtD60G1o7W1Ll=w434-h651-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/ADCreHfITwn1QrwAWN7o6CrcKRzKYnPyQZCg_5NVNgI_qd8zJ_MFWvXaaAt3jLOTCFEHYKlPBzbFSfgj1YgWv5KGz4807eTChRvPDEjXgf_LUuxhPGaZxDEAlK4h-msphENtj2-9I-fNPxNQIzX0T2snAjFR=w885-h651-s-no?authuser=0",
      ],
      count: 0,
    },
    {
      name: "Ivy",
      images: [
        "https://lh3.googleusercontent.com/pw/ADCreHeL3rfwfAEtnSUOTtNIGADBCGuiWx_98TusPgC8iWdAqrQsy3Jz2CnN5o3cTVt-HeStPvxxKshLYPIPV1wJTc_3isxfPYybDzu0HMbob_AKfB2-7vTXe1Qdf3f9k2QvKphc8lReOFd8osYayAZVQDCW=w800-h533-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/ADCreHfbF5iol0ADl3vGynY4CZToi6U8QJEUdXMNICbUqGCBRxTPruHKQrJHAqHkPBrtJyqT7eXtfpQOnca4juTXgkvCxsauoMIbh7wIrAaDslgxDwN0oqbnTqHuyG32b02XlvS7KFWBssz3dyks23wRCN5G=w800-h533-s-no?authuser=0",
      ],
      count: 0,
    },
    {
      name: "Salem",
      images: [
        "https://lh3.googleusercontent.com/pw/ADCreHfNNnC3dOPlXEuyjJ3rf_9Nq7u_lLdQxgRczf7pnfBF3dSI_p4B2CH1rr_ASlVoh-Tiu3YuY6iRVbMxf3i0C1doRapCHus_uLSDLoByKtcLQParH_6YBI5j2U1GSusHdly3x21QAh3ZuMaLA3YOpNDO=w800-h533-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/ADCreHc6jtOaNmZjWX5IYvcefVna2gcm3r0VZfM_9XYEAlFLJ_BUwMpBdpw5gUFVMum8SAIMIus3-Y2GtRSI5fNiGvJHdFSk_l_GQ-hxPojQ1h60Xf1Bjg0t9DLRb91rzDm9q6vtgtaUbsOackNO_5ErgAD4=w800-h533-s-no?authuser=0",
      ],
      count: 0,
    },
  ],
  currentId: 0,
  isAdminPanelOpened: false,
};

const controller = {
  init: function () {
    indexView.init();
  },
  getCats: function () {
    return [...data.cats];
  },
  getCurrentCat: function () {
    return data.cats[data.currentId];
  },
  selectCat: function (id) {
    data.currentId = id;
    viewerView.render();
  },
  increaseCounter: function () {
    data.cats[data.currentId].count++;
    counterView.render();
  },
  openAdminPanel: function () {
    data.isAdminPanelOpened = true;
    indexView.render();
  },
  closeAdminPanel: function () {
    data.isAdminPanelOpened = false;
    indexView.render();
  },
  isAdminPanelOpened: function () {
    return data.isAdminPanelOpened == true;
  },
  save: function () {
    const form = adminPanelView.getForm();
    data.cats[data.currentId].name = form.catName;
    data.cats[data.currentId].images[0] = form.imageUrl[0];
    data.cats[data.currentId].images[1] = form.imageUrl[1];
    data.cats[data.currentId].count = form.clicks;
    this.closeAdminPanel();
  },
};

const counterView = {
  init: function () {
    this.root = document.querySelector(".counter");
  },
  render: function () {
    const cat = controller.getCurrentCat();
    this.root.innerHTML = `
        <span class="counter__value">${cat.count}</span><span>clicks</span>`;
  },
};

const viewerView = {
  init: function () {
    this.title = document.querySelector(".box__title");
    this.pictureEl = document.querySelector(".box__picture");
    this.adminBtn = document.querySelector("#admin-btn");

    this.adminBtn.addEventListener("click", () => {
      controller.openAdminPanel();
    });

    this.pictureEl.addEventListener("click", () => {
      controller.increaseCounter();
      const interchangeImages = (imageEls) => {
        imageEls.forEach((el) => {
          el.classList.toggle("hidden");
        });
      };

      const imageEls = document.querySelectorAll(`.image`);
      interchangeImages(imageEls);
      setTimeout(() => {
        interchangeImages(imageEls);
      }, 200);
    });
    counterView.init();
  },
  render: function () {
    const cat = controller.getCurrentCat();
    this.title.textContent = cat.name;
    this.pictureEl.innerHTML = `
        <img
        class="image"
        src="${cat.images[0]}"
        />
        <img
        class="image hidden"
        src="${cat.images[1]}"
        />`;

    counterView.render();
  },
};

const listView = {
  init: function () {
    this.root = document.querySelector(".list");
  },
  render: function () {
    const cats = controller.getCats();
    const items = cats.map((item, id) => {
      return `<li id="${id}" class="item" onclick="controller.selectCat(id)"><div>${item.name}</div></li>`;
    });
    this.root.innerHTML = `${items.join("")}`;
  },
};

const indexView = {
  init: function () {
    listView.init();
    viewerView.init();
    adminPanelView.init();
    this.render();
  },

  render: function () {
    adminPanelView.render();
    listView.render();
    viewerView.render();
  },
};

const adminPanelView = {
  init: function () {
    this.root = document.querySelector(".modal");
  },
  getForm: function () {
    const catName = document.querySelector("#admin-panel__name").value;
    const imageUrl0 = document.querySelector("#admin-panel__url-0").value;
    const imageUrl1 = document.querySelector("#admin-panel__url-1").value;
    const clicks = document.querySelector("#admin-panel__clicks").value;
    return {
      catName,
      imageUrl: [imageUrl0, imageUrl1],
      clicks,
    };
  },
  render: function () {
    const isAdminPanelOpened = controller.isAdminPanelOpened();
    if (!isAdminPanelOpened) {
      this.root.innerHTML = "";
      return;
    }
    const cat = controller.getCurrentCat();
    this.root.innerHTML = `
        <div class="umbrella">
        <div class="admin-panel">
        <div class="admin-panel__field-container">
            <div class="admin-panel__field">
            <label for="admin-panel__name">Name</label>
            <input
                id="admin-panel__name"
                class="input"
                type="text"
                placeholder="Enter cat name"
                value="${cat.name}"
            />
            </div>
            <div class="admin-panel__field">
            <label for="admin-panel__url-0">ImgURL#1</label>
            <input
                id="admin-panel__url-0"
                class="input"
                type="text"
                placeholder="Enter URL image"
                value="${cat.images[0]}"
            />
            </div>
            <div class="admin-panel__field">
            <label for="admin-panel__url-1">ImgURL#2</label>
            <input
                id="admin-panel__url-1"
                class="input"
                type="text"
                placeholder="Enter URL image"
                value="${cat.images[1]}"
            />
            </div>
            <div class="admin-panel__field">
            <label for="admin-panel__clicks">#Clicks</label>
            <input
                id="admin-panel__clicks"
                class="input"
                type="number"
                min="0"
                max="9999999"
                value="${cat.count}"
            />
            </div>
        </div>
        <div class="admin-panel__button-container">
            <button id="cancel-btn" class="button button_secondary" onclick="controller.closeAdminPanel()">
            Cancel
            </button>
            <button id="save-btn" class="button" onclick="controller.save()">Save</button>
        </div>
        </div>
    </div>
    `;

    const umbrella = document.querySelector(".umbrella");
    umbrella.addEventListener("click", (ev) => {
      if (ev.target == umbrella) {
        controller.closeAdminPanel();
      }
    });
  },
};

controller.init();
