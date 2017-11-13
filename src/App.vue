<template>
  <div id="app">
    <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="th-logo has-text-centered">
              <img src="http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/treehouse-2017-all_white-2.png" alt="" width="250" />
          </div>
        <h1 class="sub-text title has-text-centered">
            <p>Treehouse Email Signature Generator</p> 
        </h1>
        </div>
      </div>
    </section>
    <div class="container">
    <div class="columns">
      <div class="column" id="input-info">
        <inputInformation :fullName="fullName, title, phone, email" />
          <!-- <a @click.once="" class="button is-success" >go</a> -->
      </div>
      <div class="column">
        <outputSignature :fullName="fullName, title, phone, email" />
      </div>
    </div>
    </div>
    <footer class="footer" id="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    &copy;Treehouse Internet Group Inc.
                </p>
            </div>
        </div>
    </footer>
  </div>
 
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      fullName: 'Full Name',
      title: 'Title',
      phone: 'Phone Number',
      email: 'Email'
    }
  }
}
</script>






<style>
#container {
  margin-top: 40px;
}
#footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
}
#input-info {
  margin-right: 100px;
}
.hero.is-primary {
  background-color: #6fac44;
}
.button.is-success {
  background-color: #6fac44;
  border-color: transparent;
  color: #fff;
}
.button.is-success.is-hovered,
.button.is-success:hover {
  background-color: #77bb46;
  border-color: transparent;
  color: #fff;
}
.input:focus {
  border-color: #77bb46;
  box-shadow: 0 0 0 0.125em rgba(119, 187, 70, 0.25);
}
.sub-text {
  margin-left: 10px;
  margin-top: 20px;
}
.sub-text p {
  color: #473f3d;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 200;
  font-size: 38;
}
.hero-body {
  padding: 1.5rem 1.5rem;
}
.input:focus {
  border-color: #77bb46;
  box-shadow: 0 0 0 0.125em rgba(119, 187, 70, 0.25);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
