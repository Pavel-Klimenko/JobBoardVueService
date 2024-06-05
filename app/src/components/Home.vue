<template>
  <Header />
  <!--      <Slider />-->
  <!--      <FindJob />-->
  <!--      <JobCategories />-->
  <JobListing />
  <!--      <Candidates />-->
  <Companies />
  <!--      <LookingForJob />-->
  <!--      <Reviews />-->
  <Footer />
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import FindJob from "./homepage/FindJob";
import Slider from "./homepage/Slider";
import JobCategories from "./homepage/JobCategories";
import JobListing from "./homepage/JobListing";
import Candidates from "./homepage/Candidates";
import Companies from "./homepage/Companies";
import LookingForJob from "./homepage/LookingForJob";
import Reviews from "./homepage/Reviews";

export default {
  name: "JobBoardVueService",
  components: {
    Header,
    Footer,
    Slider,
    FindJob,
    JobCategories,
    JobListing,
    Candidates,
    Companies,
    LookingForJob,
    Reviews
  },
}
</script>
