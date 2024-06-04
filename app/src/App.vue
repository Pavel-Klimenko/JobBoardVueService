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
import Header from "./components/Header";
import Footer from "./components/Footer";
import FindJob from "./components/homepage/FindJob";
import Slider from "./components/homepage/Slider";
import JobCategories from "./components/homepage/JobCategories";
import JobListing from "./components/homepage/JobListing";
import Candidates from "./components/homepage/Candidates";
import Companies from "./components/homepage/Companies";
import LookingForJob from "./components/homepage/LookingForJob";
import Reviews from "./components/homepage/Reviews";

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
