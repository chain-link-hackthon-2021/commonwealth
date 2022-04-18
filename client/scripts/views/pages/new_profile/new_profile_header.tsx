/* @jsx m */

import m from 'mithril';

import { NewProfile as Profile } from 'client/scripts/models'
import { SocialAccount } from 'client/scripts/models';
import { CWCard } from '../../components/component_kit/cw_card';
import { CWIcon } from '../../components/component_kit/cw_icons/cw_icon';

import 'pages/new_profile.scss';

type ProfileHeaderAttrs = {
  profile: Profile,
  socialAccounts: Array<SocialAccount>,
};

type ProfileHeaderState = {
  isBioExpanded: boolean
}

const maxBioCharCount = 325;

const renderSocialAccounts = (socialAccounts: Array<SocialAccount>) => {
    return socialAccounts?.map(account => 
      <div className="social-account-icon">
        {
          account.provider == "github" ? <a > <CWIcon iconName="github" iconSize="large" /> </a>
          : account.provider == "discord" ? <CWIcon iconName="discord" iconSize="large" />
          : account.provider == "telegram" ? <CWIcon iconName="telegram" iconSize="large" />
          : <div />
        }
      </div>
    )
}

class NewProfileHeader implements m.Component<ProfileHeaderAttrs, ProfileHeaderState> {
  
  oninit(vnode) {
    vnode.state.isBioExpanded = false
  }

  view(vnode) {
    const { profile, socialAccounts } = vnode.attrs;

    return(
      <div className="ProfileHeader">
        <CWCard
          interactive={true}
          fullWidth={true}
          className={vnode.state.isBioExpanded ? "profile-info expand" : "profile-info"}
        > 
          <div className="profile-image"> 
            <img src={profile?.avatarUrl} />
          </div>

          <section className="profile-name-and-bio">
            <h3 className="name"> { profile?.name } </h3>
            <p className="bio"> 
              { 
                profile?.bio.length > maxBioCharCount && !vnode.state.isBioExpanded ? 
                `${profile?.bio.slice(0, maxBioCharCount)}...`: profile?.bio 
              } 
            </p>
            {
              profile?.bio.length > maxBioCharCount ? 
              <div className="read-more" 
                onclick={() => { vnode.state.isBioExpanded = !vnode.state.isBioExpanded }}
              > 
                <p> 
                  { !vnode.state.isBioExpanded ? "Read More" : "Read Less" } 
                </p> 
              </div>
              : <div />
            }
          </section>

          <section className="social-accounts">
            { 
              renderSocialAccounts(socialAccounts)
            }
          </section>
        </CWCard>

      </div>
    )
  }
}

export default NewProfileHeader;
