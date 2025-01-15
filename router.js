const headerUrl = "./layouts/common/AppHeader.html";
const footerUrl = "./layouts/common/AppFooter.html";
const homeUrl = "./pages/home/HomePage.html";
const campaignUrl = "./pages/campaign/CampaignPage.html";
const rewardsUrl = "./pages/rewards/RewardsPage.html";
const rewardsDetailUrl = "./pages/rewards/RewardDetailPage.html";

export const layoutDefault = {
  Header: headerUrl,
  Footer: footerUrl,
};
const routes = [
  { path: "/", component: () => Promise.resolve(homeUrl) },
  { path: "/campaign", component: () => Promise.resolve(campaignUrl) },
  {
    path: "/rewards",
    component: () => Promise.resolve(rewardsUrl),
  },
  {
    path: "/reward-detail",
    component: () => Promise.resolve(rewardsDetailUrl),
  },
];

export default routes;
