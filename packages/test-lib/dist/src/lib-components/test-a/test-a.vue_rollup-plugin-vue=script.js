var script = /*#__PURE__*/{
  name: "TestA",

  // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return "initialized";
      return `${message.action} ${message.amount || ""}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== "number" ? 1 : arg;
      this.counter += amount;
      this.message.action = "incremented by";
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== "number" ? 1 : arg;
      this.counter -= amount;
      this.message.action = "decremented by";
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = "reset";
      this.message.amount = null;
    }

  }
};

export default script;
