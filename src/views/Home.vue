<template>
  <div class="home">
    <div class="row">
      <div class="col l6 offset-l3 m8 offset-m2 s12">
        <div class="card">
          <div class="card-content">
            <div class="main">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>
