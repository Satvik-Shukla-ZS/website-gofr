import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function EnvIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 11)"
        />
        <Gradient
          id={`${id}-gradient-dark-1`}
          color={color}
          gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
        />
        <Gradient
          id={`${id}-gradient-dark-2`}
          color={color}
          gradientTransform="matrix(0 14 -14 0 16 10)"
        />
      </defs>
      <LightMode>
        <circle cx={20} cy={20} r={12} fill={`url(#${id}-gradient)`} />
        <g
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9v14l12 6V15L3 9Z" />
          <path d="M27 9v14l-12 6V15l12-6Z" />
        </g>
        <path
          d="M11 4h8v2l6 3-10 6L5 9l6-3V4Z"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)]"
        />
        <g
          className="stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 5.5 27 9l-12 6L3 9l7-3.5" />
          <path d="M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5" />
        </g>
      </LightMode>
      <DarkMode strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <g
          id="Coupons"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <g id="Group-20-Copy-2" transform="translate(1.7413, 1.7413)">
            <path
              d="M3.21272109,23.4163429 L5.16833201,25.505588 C5.77756668,26.1564539 6.79908005,26.1902027 7.44994598,25.5809681 C7.45136812,25.5796369 7.45278784,25.5783031 7.45420515,25.5769668 L7.58076367,25.4576408 C8.22123644,24.8537696 9.15612863,24.6812302 9.96996209,25.0167014 C10.7790238,25.3502057 11.3069636,26.1388625 11.3069636,27.0139659 L11.3069636,27.2839142 C11.3069636,28.2316822 12.0752814,29 13.0230494,29 L15.6579338,29 C16.6057018,29 17.3740196,28.2316822 17.3740196,27.2839142 L17.3740196,27.0582121 C17.3740196,26.1583594 17.9226915,25.3494567 18.7587589,25.0167014 C19.6037345,24.6804007 20.5669788,24.8632669 21.2299187,25.4858363 L21.3269585,25.5769668 C21.9852172,26.1951402 23.0163933,26.1754345 23.6505535,25.5325632 L25.3884966,23.770747 C26.062621,23.0873625 26.1018309,22.0018177 25.4787665,21.2715789 L25.3861513,21.1630327 C24.7746806,20.4463818 24.6517713,19.433252 25.0741431,18.591179 C25.5013413,17.7394837 26.3725977,17.2017805 27.3254268,17.2017805 L27.3855228,17.2017805 C28.2771739,17.2017805 29,16.4789545 29,15.5873033 L29,12.8342692 C29,11.9426181 28.2771739,11.219792 27.3855228,11.219792 L25.7710455,11.219792 L25.5891601,11.219792 C25.4789533,11.219792 25.3794884,11.1537181 25.3367666,11.0521288 L24.8922577,9.99511661 C24.5784125,9.24881411 24.7280982,8.38806747 25.2754658,7.79153174 L25.6595044,7.37299631 C26.3695574,6.59916181 26.3233866,5.3976938 25.5560405,4.68063378 L23.8519258,3.08819386 C23.1479447,2.4303463 22.0439644,2.46774496 21.3861169,3.1717261 C21.3658332,3.19343218 21.3461074,3.21565282 21.3269585,3.23836629 L21.1478697,3.45079341 C20.560314,4.14772537 19.5688291,4.34560313 18.7587589,3.9276054 C17.9083093,3.48877178 17.3740196,2.6118512 17.3740196,1.65485616 L17.3740196,1.60653866 C17.3740196,0.719271859 16.6547478,0 15.767481,0 L13.2933388,0 C12.406072,0 11.6868001,0.719271859 11.6868001,1.60653866 C11.6868001,2.58680225 11.1195603,3.4785194 10.2317004,3.8939969 L10.1598803,3.9276054 C9.24854342,4.35406907 8.16643973,4.14788492 7.47578098,3.41617683 L7.45420515,3.39331864 C6.81873373,2.72007794 5.75781293,2.68945989 5.08457223,3.32493131 C5.07475767,3.33419526 5.06505535,3.3435774 5.0554674,3.35307569 L3.60341705,4.79154506 C2.9377593,5.45097694 2.91710883,6.52018137 3.5568073,7.20482472 L3.6445186,7.29869857 C4.28278737,7.98181177 4.43097121,8.98893855 4.01651274,9.82694503 C3.59463516,10.6799524 2.72538776,11.219792 1.77375637,11.219792 L1.66382155,11.219792 C0.744918283,11.219792 0,11.9647103 0,12.8836135 L0,15.537959 C0,16.4568623 0.744918283,17.2017805 1.66382155,17.2017805 L1.83864092,17.2017805 C2.73582324,17.2017805 3.54046075,17.7540118 3.86308633,18.591179 C4.18837141,19.4352472 3.98327677,20.3918155 3.34054399,21.0283341 L3.25638073,21.1116837 C2.62045168,21.7414644 2.60110098,22.7629285 3.21272109,23.4163429 Z"
              id="Path-6-Copy"
              stroke={`url(#${id}-gradient-dark-1)`}
              strokeWidth="2.074074"
              strokeLinecap="round"
            />
            <path
              d="M14.5401246,5.57423281 C16.988004,5.57423281 19.2041214,6.56815927 20.8082831,8.17505509 C22.4126159,9.78212234 23.4048759,12.0022762 23.4048759,14.454567 C23.4048759,16.9068578 22.4126159,19.1270117 20.8082831,20.734079 C19.2041214,22.3409748 16.988004,23.3349012 14.5401246,23.3349012 C12.0922452,23.3349012 9.87612782,22.3409748 8.27196619,20.734079 C6.66763341,19.1270117 5.67537342,16.9068578 5.67537342,14.454567 C5.67537342,12.0022762 6.66763341,9.78212234 8.27196619,8.17505509 C9.87612782,6.56815927 12.0922452,5.57423281 14.5401246,5.57423281 Z M16.36041,8.65813282 C16.0393884,8.57596383 15.7125378,8.76959216 15.6303688,9.09061381 L13.062167,19.1241842 C12.979998,19.4452058 13.1736263,19.7720564 13.494648,19.8542254 C13.8156696,19.9363944 14.1425202,19.742766 14.2246892,19.4217444 L16.792891,9.38817405 C16.87506,9.0671524 16.6814316,8.74030181 16.36041,8.65813282 Z M17.9143298,11.3196271 L17.878463,11.3194099 C17.7082484,11.3221219 17.4953169,11.3909873 17.1132503,12.1139942 C17.1078114,12.3224846 17.1819088,12.5330498 17.3368319,12.6962724 L18.8945905,14.3364426 L17.3295772,16.0293726 C17.1867209,16.183839 17.1139752,16.3779972 17.1221748,16.587981 C17.1291573,16.7667943 17.1963755,16.9612262 17.3745871,17.1809504 C17.5398018,17.3337472 17.7513088,17.4051121 17.9597113,17.3969743 C18.1681138,17.3888364 18.3734118,17.3011956 18.5262086,17.1359809 L20.6094568,14.8834242 L21.1278795,14.3228687 L20.6022425,13.7690723 L18.5189943,11.5742205 C18.3640712,11.4109979 18.1576557,11.3260226 17.9491653,11.3205837 L17.9143298,11.3196271 Z M11.3623879,11.3194099 L11.3265211,11.3196271 L11.2916856,11.3205837 C11.0831952,11.3260226 10.8767797,11.4109979 10.7218566,11.5742205 L8.63860841,13.7690723 L8.11297141,14.3228687 L8.63139411,14.8834242 L10.7146423,17.1359809 C10.8674391,17.3011956 11.0727371,17.3888364 11.2811396,17.3969743 C11.4895421,17.4051121 11.7010491,17.3337472 11.8662638,17.1809504 C12.0444754,16.9612262 12.1116936,16.7667943 12.1186761,16.587981 C12.1268757,16.3779972 12.05413,16.183839 11.9112737,16.0293726 L10.3462604,14.3364426 L11.904019,12.6962724 C12.0589421,12.5330498 12.1330395,12.3224846 12.1276006,12.1139942 C11.745534,11.3909873 11.5326025,11.3221219 11.3623879,11.3194099 Z"
              id="Combined-Shape"
              fill={`url(#${id}-gradient-dark-1)`}
              fillRule="nonzero"
            />
          </g>
        </g>
      </DarkMode>
    </>
  )
}