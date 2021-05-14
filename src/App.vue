<template>
  <div id="app">
  
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="th-logo has-text-centered">
              <img src="https://cdn.treehouseinternetgroup.com/cms_images/687/th-marketing-logo-KO-sign.png" alt="" width="250" />
          </div>
        <h1 class="sub-text title has-text-centered">
            <p>Email Signature Generator</p> 
        </h1>
        </div>
      </div>
    </section>
<!----------------- Header Ends ---------------->

    <div class="container main">  
      <div>  
        <div class="columns">
<!----------------- Input Information ---------------->  
          <div class="column" id="input-info">
              <h3 class="subtitle">Input Information</h3>
            <inputInformation :fullName.sync="fullName" :title.sync="title" :phone.sync="phone" :email.sync="email" />

<!----------------- Button ---------------->   
            <button @click="toggleShow, $modal.show('output')" class="button is-success" type="submit" :disabled="!isValid">
                Copy Signature
            </button>
            <button @click.prevent="reset" class="button is-success" type="submit" :disabled="!isReset">
                Reset
            </button>


          </div>
<!----------------- Output Signature ---------------->       
          <div class="column">
              <h3 class="subtitle">Output Signature</h3>
            <outputSignature :fullName.sync="fullName" :title.sync="title" :phone.sync="phone" :email.sync="email" />
          </div>
        </div>
      </div>
 <!----------------- Modal ---------------->    
 
        <modal name="output" :height="415">
         
          <div class="sign-box level-item has-text-centered">
              <div class="output-btn">
                  <p class="field">
                      <a class="button is-small" @click="$modal.hide('output')">
                        <span class="icon is-small">
                          <i class="fa fa-times"></i>
                        </span>
                      </a>
                    </p>
                </div>
            <outputSignature :fullName.sync="fullName" :title.sync="title" :phone.sync="phone" :email.sync="email"/>
           
          </div>

          <div class="gif-box level-item has-text-centered">
            <ul>
              <li>1. Place cursor at the top-left corner of Treehouse logo and click and drag to bottom-right corner of <img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/instagram_sig.png"></li>
              <li>2. Paste into your Outlook signature preferences panel</li>
              <li>3. Adjust logo size if needed</li>
              <li>4. Result may look funny in Signature preferences, but try in a new message</li>
            </ul>
          <img src="http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/sign-copy3.gif" alt="">
        </div>
          </modal>
  
    </div>
 
<!----------------- Footer ---------------->
    <footer class="" id="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    &copy;2021 Treehouse Marketing Inc.
                </p>
            </div>
        </div>
    </footer>
  
 
  </div>

</template>

<!-------------------------- Scripts ---------------------------->

<script>

export default {
  name: 'app',
  data: function () {
    return {
      fullName: 'Full Name',
      title: 'Title',
      phone: 'Phone Number',
      email: 'Email',
      isShowing: false
    }
  },
  computed: {
    isValid: function () {
      return this.fullName !== 'Full Name' && this.title !== 'Title' && this.phone !== 'Phone Number' && this.email !== 'Email'
    },
    isReset: function () {
      return this.fullName !== 'Full Name' || this.title !== 'Title' || this.phone !== 'Phone Number' || this.email !== 'Email'
    }
  },
  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    },
    show () {
      this.$modal.show('output')
    },
    hide () {
      this.$modal.hide('output')
    },
    reset () {
      this.fullName = 'Full Name'
      this.title = 'Title'
      this.phone = 'Phone Number'
      this.email = 'Email'
    }
  }
}
</script>



<!-------------------------- Styles ---------------------------->
<style scoped>


li {
  padding-left: 15px; 
  text-indent: -15px;
}

.output-btn {
    right: 0;
    position: absolute;
    top: 0;
    margin-right: 5px;
}
.sign-box {
    margin-top: 30px;
    margin-left: 60px;
}
.gif-box {
  margin-top: 30px;
  margin-left: 1px;
  background-color: #efefef;
  padding: 20px;
  border-top: 1px dashed #6fac44;
}
.gif-box ul {
    text-align:left;
    font-size: 14px;
}
.gif-box p {
   text-align: left;
   padding-right: 20px;
   font-size: 14px;
}
.gif-box img {
   width:250px;
}
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
input:disabled {
    background: #dddddd;
}
.container.main {
  margin-top: 40px;
}
#footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 45px;
    width: 100%;
    background-color: #efefef;
    padding-top: 10px;
}
#input-info {
  margin-right: 100px;
}
.hero.is-primary {
  background-color: rgb(111, 172, 68);
}
.button {
  margin-top: 10px;
}
.button.is-success, .button.is-success[disabled] {
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
