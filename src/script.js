var app = new Vue({
  el: "#app",
  data: {
    bgType: "Color",
    bgColor: "#000000",
    bgGradient1: "#ff0000",
    bgGradient2: "#0000ff",
    bgGradientDeg: 45,
  },
  computed: {
    artboardStyle: function () {
      if (this.bgType === "Color") return this.artboardBgColor;
      else return this.artboardBgGradient;
    },
    artboardBgColor: function () {
      return { backgroundColor: this.bgColor };
    },
    artboardBgGradient: function () {
      return {
        backgroundImage: `linear-gradient(${this.bgGradientDeg}deg,${this.bgGradient1}, ${this.bgGradient2})`,
      };
    },
  },

  methods: {},
});

// const artboard = document.querySelector(".artboard");
