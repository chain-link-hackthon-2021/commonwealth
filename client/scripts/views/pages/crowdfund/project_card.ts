import 'pages/crowdfund/project_card.scss';

import m from 'mithril';
import { AnonymousUser } from '../../components/widgets/user';
import { capitalize } from 'lodash';

export enum ProjectCardSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface ProjectCardAttrs {
  project; // : Project;
  size: ProjectCardSize;
}

interface ProjectCardState {
}

export enum DummyProjectData {
  ProjectTitle = 'Project Name',
  ProjectDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    + 'Sit ullamcorper tortor pretium amet eget leo. Venenatis id risus at mollis '
    + 'orci sapien integer id non eget.',
  ProjectBlockCount = '16K',
  ProjectChain = 'Ethereum',
  ProjectCompletionPercent = 0.32,
  ProjectCompletionSuccess = 'funded',
  ProjectCompletionFailure = 'failed',
}

const DummyChainIcon: m.Component<{ chain, onclick, size: number }> = {
  view: (vnode) => {
    const iconUrl = 'https://commonwealth.im/static/img/protocols/edg.png'
    const size = vnode.attrs.size;
    return m('.ChainIcon', { class: onclick ? 'onclick' : '' }, [
      m('img.chain-icon', {
        style: `width: ${size}px; height: ${size}px;`,
        src: iconUrl,
        onclick
      })
    ]);
  }
};

const ProjectHeaderPanel: m.Component<{ iconSize?: number }> = {
  view: (vnode) => {
    const { iconSize } = vnode.attrs;
    return m('.ProjectHeaderPanel', [
      iconSize && m(DummyChainIcon, {
        chain: null,
        onclick: null,
        size: iconSize
      })
    ]);
  }
}

export const ProjectCompletionBar: m.Component<{ completionPercent: number }> = {
  view: (vnode) => {
    const { completionPercent } = vnode.attrs;
    return m('.ProjectCompletionBar', [
      m('.completed-percentage', {
        style: `width: ${completionPercent * 400}px`
      }),
    ]);
  }
}

const ProjectInfoPanel: m.Component<{ project, avatarSize: number, iconSize?: number }> = {
  view: (vnode) => {
    const { project, avatarSize, iconSize } = vnode.attrs;
    return m('.ProjectInfoPanel', [
      m('.project-info-header', [
        m('h3.project-title', [
          iconSize && m(DummyChainIcon, {
            chain: null,
            onclick: null,
            size: iconSize
          }),
          DummyProjectData.ProjectTitle
        ]),
        m('.project-block-count', `${DummyProjectData.ProjectBlockCount} Blocks`)
      ]),
      m('.project-info-body', DummyProjectData.ProjectDescription),
      m('.project-info-footer', [
        m(AnonymousUser, { // dummy user
            avatarSize,
            distinguishingKey: '123',
        })
      ])
    ]);
  }
}

const ProjectCard: m.Component<
  ProjectCardAttrs,
  ProjectCardState
> = {
  view: (vnode) => {
    const { project, size } = vnode.attrs;
    const onclick = null; // = m.route.set(`${app.activeId()}/${project.id}-slugify(project.name))

    const ProjectCardLarge = m('.ProjectCard',
      { class: 'large', onclick },
      [
        m(ProjectHeaderPanel, { iconSize: 45 }),
        m(ProjectCompletionBar, { completionPercent: (DummyProjectData.ProjectCompletionPercent as number) }),
        m(ProjectInfoPanel, { project, avatarSize: 20 })
      ]
    );

    const ProjectCardMedium= m('.ProjectCard',
      { class: 'medium', onclick },
      [
        m(ProjectHeaderPanel),
        m('.right-panel', [
          m(ProjectCompletionBar, { completionPercent: (DummyProjectData.ProjectCompletionPercent as number) }),
          m(ProjectInfoPanel, { project, avatarSize: 16, iconSize: 24 })
        ])
      ]
    );

    const ProjectCardSmall = m('.ProjectCard',
      { class: 'small', onclick },
      [
        m('.top-panel', [
          m('h3', DummyProjectData.ProjectTitle),
          // TODO: Implement label in kit
          m(`.project-status ${DummyProjectData.ProjectCompletionSuccess}`,
            capitalize(DummyProjectData.ProjectCompletionSuccess)
          )
        ]),
        m('.bottom-panel', [
          m(DummyChainIcon, {
            chain: null,
            onclick: null,
            size: 12,
          }),
          m('.project-chain-name', DummyProjectData.ProjectChain)
        ])
      ]
    );

    switch (size) {
      case ProjectCardSize.Large:
        return ProjectCardLarge;
      case ProjectCardSize.Medium:
        return ProjectCardMedium;
      case ProjectCardSize.Small:
        return ProjectCardSmall;
      default:
    }
  }
}

export default ProjectCard;