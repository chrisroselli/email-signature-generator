<template>
  <div>
      <section>
        <table cellpadding="0" cellspacing="0" border="0" style=
        "background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
        <tr>
            <td valign="top" style=
            "padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 7px; border-top: 0; border-bottom: 0: border-left: 0; border-right: solid 2px #6fac44">
            <img width="175"
                    height="144" style="width: 175px; max-width: 175px !important; height: 144px; max-height: 144px !important;" id="preview-image-url" src=
            "https://cdn.treehouseinternetgroup.com/cms_images/687/treehouse-mktg-branch_logo_sign.jpg"
              name="preview-image-url" />
            </td>
            <td style=
            "padding-top: 0; padding-bottom: 0; padding-left: 12px; padding-right: 0;">
            <table cellpadding="0" cellspacing="0" border="0" style=
            "background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
              <tr>
                  <td colspan="2" style=
                  "padding-bottom: 5px; color: #6fac44; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">
                  {{fullName}}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style=
                  "color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                  <em>{{title}}</em>
                  </td>
                </tr>
                <tr>
                  <td width="20" valign="top" style=
                  "vertical-align: top; width: 20px; color: #6fac44; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                  p:
                  </td>
                  <td valign="top" style=
                  "vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                  {{phone}}
                  </td>
                </tr>
                <tr>
                  <td width="20" valign="top" style=
                  "vertical-align: top; width: 20px; color: #6fac44; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                  w:
                  </td>
                  <td valign="top" style=
                  "vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                  <a href="https://www.treehousemarketing.com" target="_blank" style=
                  "color: #333333; text-decoration: none; font-weight: normal; font-size: 14px;">
                    www.treehousemarketing.com</a>
                    &nbsp;&nbsp;
                  </td>
                </tr>
                <tr>
                    <td width="20" valign="top" style=
                    "vertical-align: top; width: 20px; color: #6fac44; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                    e:
                    </td>
                    <td valign="top" style=
                    "vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                    <a :href="`mailto:${this.email}`" style="color: #333333; text-decoration: none; font-weight: normal; font-size: 14px;">{{email}}</a>
                      &nbsp;&nbsp;
                    </td>
                  </tr>
                <tr>
                  <td colspan="2" style="padding-top: 5px;">
                    <a href="https://www.facebook.com/treehouseinternetgroup/" target="_blank" style=
                    "border-width:0px; border:0px; text-decoration: none;">
                    <img width="22"
                    height="22" style=
                    "border: none; width: 22px; max-width: 22px !important; height: 22px; max-height: 22px !important;"
                    src=
                    "https://cdn.treehouseinternetgroup.com/cms_images/687/facebook-social-media-icon.png" />
                    </a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/company/10449254/" target="_blank"
                    style=
                    "border-width:0px; border:0px; text-decoration: none;">
                    <img width="22"
                    height="22" style=
                    "border: none; width: 22px; max-width: 22px !important; height: 22px; max-height: 22px !important;"
                    src=
                    "https://cdn.treehouseinternetgroup.com/cms_images/687/linkedin-social-media-icon.png" /></a
                    >&nbsp;&nbsp;
                    <a href="https://www.instagram.com/treehouseinternetgroup/" target="_blank"
                    style=
                    "border-width:0px; border:0px; text-decoration: none;">
                    <img width="22"
                    height="22" style=
                    "border: none; width: 22px; max-width: 22px !important; height: 22px; max-height: 22px !important;"
                    src=
                    "https://cdn.treehouseinternetgroup.com/cms_images/687/instagram-social-media-icon.png" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
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
