var app = new Vue({
  el: "#app",
  data: {
    bgType: "Color",
    bgColor: "#000000",
  },
  computed: {
    artboardStyle: function () {
      return { backgroundColor: this.bgColor };
    },
  },

  methods: {},
});

// const artboard = document.querySelector(".artboard");
