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
};

const controller = {
  init: function () {
    indexView.init();
    indexView.render();
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
    viewerView.animation();
  },
};

const counterView = {
  init: function () {
    this.root = document.querySelector(".counter");
  },
  render: function () {
    const cat = controller.getCurrentCat();
    this.root.innerHTML = `
        <div class="counter">
        <span class="counter__value">${cat.count}</span><span>clicks</span>
        </div>`;
  },
};

const viewerView = {
  init: function () {
    this.title = document.querySelector(".box__title");
    this.pictureEl = document.querySelector(`.box__picture`);

    counterView.init();
  },
  animation: function () {
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
  },
  render: function () {
    const cat = controller.getCurrentCat();
    this.title.textContent = cat.name;
    this.pictureEl.innerHTML = `
        <div class="box__picture" onclick="controller.increaseCounter()">
        <img
        class="image"
        src="${cat.images[0]}"
        />
        <img
        class="image hidden"
        src="${cat.images[1]}"
        />
        </div>`;
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
    this.root.innerHTML = `
        <ul class="list">
            ${items.join("")}
        </ul>`;
  },
};

const indexView = {
  init: function () {
    listView.init();
    viewerView.init();
  },

  render: function () {
    listView.render();
    viewerView.render();
  },
};

controller.init();
