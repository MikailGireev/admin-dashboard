<script setup lang="ts">
import router from '@/app/router';
import { Container } from '@/shared/container';
import { Typography } from '@/shared/typography';
import { StatsCard } from '@/widgets/stats-card';

const urlPath = router.currentRoute.value.name;
</script>

<template>
  <Container>
    <div class="dashboard">
      <Typography tag="h1">{{ urlPath }}</Typography>
      <div class="cards">
        <StatsCard icon="total-user" title="Total Users" value="40,689" />
      </div>
    </div>
  </Container>
</template>

<style scoped lang="scss">
.dashboard {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
</style>
