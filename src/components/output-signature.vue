<template>
  <div>
      <section>
        <h3 class="subtitle">Output Signature</h3>
        <table border="0" cellspacing="0" cellpadding="0" width="470" style="width: 470px;">
            <tbody>
                <tr valign="top">
                    <td style="padding-left:10px; width: 10px; padding-right:10px;">
                        <img src="https://s3.amazonaws.com/ucwebapp.wisestamp.com/627aa923-c980-4ecf-82e3-3bcd0d11e937/treehousecnlogo.format_png.resize_200x.png#logo"
                            width="65" height="53.3994334278" alt="photo" style="border-radius: 0px; width: 170px; height: auto; max-width: 170px;"> </td>
                    <td style="border-right: 1px solid #45668e;"></td>
                    <td style="text-align:initial; font:12px Arial;color:#646464;padding:0 10px">
                        <div>
                            <b style="color: #6fac44; font-size:14px">{{fullName}}</b>
                            <br>
                            <span style="display:block">
                                <em>{{title}}</em>
                            </span>
                            <span style="display:block">Treehouse Internet Group</span>
                        </div>
                        <div style="color:#8d8d8d;font-size:14px;padding:5px 0">
                            <a href="tel:1-203-463-9563" style="color:#8d8d8d">
                                <strong>{{phone}}</strong>
                            </a>

                            <span style="display:block;">
                                <a href="http://www.treehouseinternetgroup.com" target="_blank" style="color:#8d8d8d;">www.treehouseinternetgroup.com</a>
                            </span>

                            <span style="color:#8d8d8d; display:block;">{{email}}</span>
                        </div>
                        <div style="margin-top: 5px">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr style="padding-top: 10px;">
                                        <td align="left" style="padding-right: 5px;text-align: center;">
                                            <a href="http://www.facebook.com/treehouseinternetgroup/" target="_blank">
                                                <img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;"
                                                    width="16" height="16" src="http://cdn2.hubspot.net/hubfs/184235/dev_images/signature_app/facebook_sig.png">
                                            </a>
                                        </td>
                                        <td align="left" style="padding-right: 5px;text-align: center;">
                                            <a href="http://www.linkedin.com/company/10449254/" target="_blank">
                                                <img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;"
                                                    width="16" height="16" src="http://cdn2.hubspot.net/hubfs/184235/dev_images/signature_app/linkedin_sig.png">
                                            </a>
                                        </td>
                                        <td align="left" style="padding-right: 5px;text-align: center;">
                                            <a href="http://www.instagram.com/treehouseinternetgroup/" target="_blank">
                                                <img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;"
                                                    width="16" height="16" src="http://cdn2.hubspot.net/hubfs/184235/dev_images/signature_app/instagram_sig.png">
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
  </div>
</template>

<script>
// import {bus} from '../main'
export default {
  name: 'outputSignature',
  props: {
    fullName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
