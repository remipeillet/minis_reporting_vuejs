<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper gradient-45deg-purple-deep-purple">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><router-link to="/">Accueil</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
.gradient-45deg-purple-light-blue{
  background: linear-gradient(45deg,#e040fb,#4fc3f7) !important;
}
.gradient-45deg-light-blue-purple{
  background: linear-gradient(45deg,#4fc3f7,#e040fb) !important;
}
.gradient-45deg-purple-deep-purple{
  background: linear-gradient(45deg,#7b1fa2,#7c4dff) !important;
}
.gradient-45deg-deep-purple-purple{
  background: linear-gradient(45deg,#7c4dff,#7b1fa2) !important;
}
.gradient-45deg-purple-indigo{
  background: linear-gradient(45deg,#7b1fa2,#303f9f) !important;
}
.gradient-45deg-indigo-purple{
  background: linear-gradient(45deg,#303f9f,#7b1fa2) !important;
}
</style>
