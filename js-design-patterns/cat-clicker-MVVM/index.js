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

function Cat(data) {
  this.name = ko.observable(data.name);
  this.images = ko.observableArray(data.images);
  this.count = ko.observable(data.count);
}

function ModelView() {
  self = this;

  this.catList = ko.observableArray(data.cats.map((cat) => new Cat(cat)));
  this.currentCat = ko.observable(this.catList()[0]);
  this.isAdminPanelOpened = ko.observable(false);

  this.save = function () {
    self.closeAdminPanel();
    self.currentCat().count(self.temporaryCat().count());
    self.currentCat().name(self.temporaryCat().name());
    self.currentCat().images(self.temporaryCat().images());
  };

  this.selectCat = function (cat) {
    self.currentCat(cat);
  };

  this.increaseCounter = function () {
    self.currentCat().count(parseInt(self.currentCat().count()) + 1);
  };

  this.temporaryCat = ko.observable(new Cat(data.cats[0]));

  this.openAdminPanel = function () {
    self.isAdminPanelOpened(true);
    self.temporaryCat().name(self.currentCat().name());
    self.temporaryCat().images(self.currentCat().images());
    self.temporaryCat().count(self.currentCat().count());
  };

  this.closeAdminPanel = function () {
    self.isAdminPanelOpened(false);
  };
}

ko.applyBindings(new ModelView());
