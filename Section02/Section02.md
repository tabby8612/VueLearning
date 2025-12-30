# Section 02 - Vue Core Concepts

## Using Interpolation and v-bind

![v-bind](./screenshots/v-bind.png)

`Interpolation` can also be used to return function value, or writing simple Javascript but not for complex if-statements and loops. Like

``` javascript
const app = Vue.createApp({
  data: () => {
    return {
      courseGoal: "Complete Vue Course and create Two Projects",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    createGoal() {
      if (Math.random() < 0.5) {
        return "Learn Vue";
      } else {
        return "Master Vue";
      }
    },
  },
});

app.mount("#user-goal");
```

``` html
<section id="user-goal">
    <h2>My Course Goal</h2>
    <p>{{ createGoal() }}</p>
    <p>You can also visit <a v-bind:href="vueLink">Vue Page</a></p>
</section>
```

`v-bind` is special feature in Vue that binds HTML attribute.

## Using Data Variables Inside App

We can also use data varibles inside methods using `this` keyword, because Vue makes **data variable access globally** in createApp object. So, `this` refer to createApp object.

``` javascript
const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "Complete Vue Course",
      courseGoalB: "Create Two Vue + Laravel Projects",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    createGoal() {
      if (Math.random() < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
```

## Rendering Raw HTML

You can **render raw html** using `v-html` attribute in html tags

``` javascript
const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "Complete Vue Course",
      courseGoalB: "<i>Create Two Vue + Laravel Projects</i>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    createGoal() {
      if (Math.random() < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
```

``` html
<body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <!-- <p>{{ createGoal() }}</p> -->
      <p v-html="createGoal()"></p>
      <p>You can also visit <a v-bind:href="vueLink">Vue Page</a></p>
    </section>
  </body>
```

## User Events

![event listerener](./screenshots/user_events.png)

Using `v-on` directive and then specifying event name, we can control event listerener in Vue.js

It is good practice to pass `callback functions` in event listeners

``` javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increaseCount(num = 1) {
      this.counter = this.counter + num;
    },

    decreaseCount(num = 1) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
```

``` html
<section id="events">
  <h2>Events in Action</h2>
  <button v-on:click="increaseCount(5)">Add</button>
  <button v-on:click="decreaseCount()">Remove</button>
  <p>Result: {{ counter }}</p>
</section>
```

## Passing Event Object

By default, Vue JS **sends event object to every event listener**. If you want to pass your argument as well then you need to first pass `$event` followed by your argument.

![event object](./screenshots/passing_event_object.png)

## Event Modifier

We can use event modifier in Vue Js. One of the example is using prevent to prevent default form behaviour.

![event modifier](./screenshots/event_modifier.png)


## Calculating Value Once

If you want to **prevent Vue from recalculating** values again and again, you can use `v-once` directive.

``` html
<p v-once>Result: {{ counter }}</p>
```

## Two way of binding - `v-bind`

You can bind any component to change field dynamically using `v-bind` directive

![two-way binding](./screenshots/v-bind.png)


## Computed Properties

Similar to `useMemo()` that cache property value and updates when one of its dependency changes, **computed properties** do same job.

![computed properties](./screenshots/computed_properties.png)


## Watchers

Watchers work like `useEffect()` and they must be bound to one of the data properties. Once data property changes, Vue JS runs its linked watcher by passing its old and new value.

![watchers](./screenshots/watchers.png)


## Methods Vs. Computed Properties Vs. Watchers

![methods vs. computed properties vs. watchers](./screenshots/methods,computed,watchers.png)

## Shorthand for `v-bind` and `v-on`

You can use `@` as a shorthand for `v-on` and `:` as a shorthand for `v-bind`









