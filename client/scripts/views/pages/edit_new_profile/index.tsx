/* @jsx m */

import m from 'mithril';
import app from 'state';
import $ from 'jquery';

import Sublayout from 'views/sublayout';

import { NewProfile as Profile } from '../../../../scripts/models'
import { CWButton } from '../../components/component_kit/cw_button';
import { CWTextInput, ValidationStatus } from '../../components/component_kit/cw_text_input';

import 'pages/edit_new_profile.scss';

type EditProfileState = {
  address: string,
  profile: Profile,
  profileUpdate: Object,
  saved: boolean,
}

enum InputFormField {
  Email,
  ProfileName,
  Bio,
  ProfileImage,
  Website,
} 

class EditNewProfile implements m.Component<{}, EditProfileState> {

  oninit(vnode) {
    vnode.state.address = m.route.param("address")
    this.getProfile(vnode, vnode.state.address)
    vnode.state.profileUpdate = {}
    vnode.state.saved = false
  }

  getProfile = async (vnode, address: string) => {
    const response = await $.get(`${app.serverUrl()}/profile/v2`, {
      address,
      jwt: app.user.jwt,
    });
    // TODO : Error handling
    vnode.state.profile = Profile.fromJSON(response.profile) 
    m.redraw()
  }

  updateProfile = async (vnode) => {
    const response = await $.post(`${app.serverUrl()}/updateProfile/v2`, {
      address: vnode.state.address,  
      ...('email' in vnode.state.profileUpdate) && {email: vnode.state.profileUpdate.email},
      ...('name' in vnode.state.profileUpdate) && {name: vnode.state.profileUpdate.name},
      ...('bio' in vnode.state.profileUpdate) && {bio: vnode.state.profileUpdate.bio},
      ...('avatarUrl' in vnode.state.profileUpdate) && {avatarUrl: vnode.state.profileUpdate.avatarUrl},
      ...('website' in vnode.state.profileUpdate) && {website: vnode.state.profileUpdate.website},
      jwt: app.user.jwt,
    })
    if (response.status == 'Success'){
      vnode.state.saved = true
      m.redraw()
      // Redirect
      setTimeout(()=>{
        m.route.set(`/profile/${vnode.state.address}`)
      }, 1500)
    } else {
      // TODO : Error handling
    }
  }

  handleInputChange = (vnode, value, formField: InputFormField) => {
    if (formField === InputFormField.Email) {
      if (value.length > 0 && value != vnode.state.profile?.email)
        vnode.state.profileUpdate.email = value
      else
        delete vnode.state.profileUpdate.email
    }

    if (formField === InputFormField.ProfileName) {
      if (value.length > 0 && value != vnode.state.profile?.name)
        vnode.state.profileUpdate.name = value
      else
        delete vnode.state.profileUpdate.name
    }

    if (formField === InputFormField.Bio) {
      if (value.length > 0 && value != vnode.state.profile?.bio)
        vnode.state.profileUpdate.bio = value
      else
        delete vnode.state.profileUpdate.bio
    }

    if (formField === InputFormField.ProfileImage) {
      if (value.length > 0 && value != vnode.state.profile?.avatarUrl)
        vnode.state.profileUpdate.avatarUrl = value
      else
        delete vnode.state.profileUpdate.avatarUrl
    }

    if (formField === InputFormField.Website) {
      if (value.length > 0 && value != vnode.state.profile?.website)
        vnode.state.profileUpdate.website = value
      else
        delete vnode.state.profileUpdate.website
    }
  }

  handleSaveProfile = (vnode) => {
    this.updateProfile(vnode)
  }

  view(vnode) {
    return (
      <div className="EditProfilePage">
        <h3> Edit Profile </h3>
        <div className="edit-pane">

          <CWButton         
            label={vnode.state.saved ? "Saved!" : "Save"}
            buttonType="primary"
            onclick={()=>{ this.handleSaveProfile(vnode) }} 
            className={vnode.state.saved ? "save-button confirm" : "save-button"}
          />

          <div className="general-info">
            <h4 className="title"> General Info </h4>

            <CWTextInput
              name="email-form-field"
              inputValidationFn={(val: string): [ValidationStatus, string] => {
                if (val.match(/[^A-Za-z0-9@.]/)) {
                  return [ValidationStatus.Failure, 'Must enter characters A-Z'];
                } else {
                  return [ValidationStatus.Success, 'Input validated'];
                }
              }}
              label="Email"
              placeholder={vnode.state.profile?.email}
              oninput={(e) => {
                this.handleInputChange(vnode, (e.target as any).value, InputFormField.Email)
              }}
            />
          
            <CWTextInput
              name="name-form-field"
              inputValidationFn={(val: string): [ValidationStatus, string] => {
                if (val.match(/[^A-Za-z0-9]/)) {
                  return [ValidationStatus.Failure, 'Must enter characters A-Z'];
                } else {
                  return [ValidationStatus.Success, 'Input validated'];
                }
              }}
              label="Profile Name"
              placeholder={vnode.state.profile?.name}
              oninput={(e) => {
                this.handleInputChange(vnode, (e.target as any).value, InputFormField.ProfileName)
              }}
            />

            <CWTextInput
              name="bio-form-field"
              label="Bio"
              placeholder={vnode.state.profile?.bio}
              oninput={(e) => {
                this.handleInputChange(vnode, (e.target as any).value, InputFormField.Bio)
              }}
            />

            <div className="profile-image-section">
              <h4 className="title"> Profile Image </h4>
              <div className="flex">
                <div className="profile-image">
                  <img src={vnode.state.profile?.avatarUrl} />
                </div>
                <p> OR </p>
                <CWTextInput
                  name="profile-image-form-field"
                  inputValidationFn={(val: string): [ValidationStatus, string] => {
                    if (val.match(/[^A-Za-z@.0-9*#]/)) {
                      return [ValidationStatus.Failure, 'Must enter characters A-Z'];
                    } else {
                      return [ValidationStatus.Success, 'Input validated'];
                    }
                  }}
                  label="Image URL"
                  placeholder={vnode.state.profile?.avatarUrl}
                  oninput={(e) => {
                    this.handleInputChange(vnode, (e.target as any).value, InputFormField.ProfileImage)
                  }}
                />
              </div>
            </div>

          </div>
          <div className="social-links">
            <h4 className="title"> Links </h4>
            <CWTextInput
              name="website-form-field"
              inputValidationFn={(val: string): [ValidationStatus, string] => {
                if (val.match(/[^A-Za-z0-9@.-]/)) {
                  return [ValidationStatus.Failure, 'Must enter characters A-Z'];
                } else {
                  return [ValidationStatus.Success, 'Input validated'];
                }
              }}
              label="Website"
              placeholder={vnode.state.profile?.website}
              oninput={(e) => {
                this.handleInputChange(vnode, (e.target as any).value, InputFormField.Website)
              }}
            />
          </div>
        </div>        
      </div>

    )
  }
}

const EditNewProfilePage: m.Component = {
  view: () => {
    return m(
      Sublayout,
      {
        class: 'Homepage',
      },
      [m(EditNewProfile)]
    );
  },
};

export default EditNewProfilePage;