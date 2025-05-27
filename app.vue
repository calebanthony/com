<script setup>
useHead({
  htmlAttrs: {
    class: 'dark',
  },
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <main class="flex flex-col min-h-screen container mx-auto p-2">
      <Nav />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-center">
          <img
            src="/headshot.png"
            class="max-w-96 h-full object-cover"
          >
        </div>
        <div class="flex flex-col justify-center">
          <h1 class="text-4xl font-bold text-white">
            Caleb Anthony
          </h1>
          <p class="text-lg">
            Senior Full-Stack Developer
          </p>
          <p class="text-lg">
            Workflow Architect
          </p>
          <p class="mt-2 text-neutral-300">
            My superpower is empowering people to do what people do best.
          </p>
          <p class="mt-2 text-neutral-300">
            If your team is talking about hiring more people to handle the workload, you might not need more hands—you might need better systems. I turn manual chaos into automated clarity.
          </p>
        </div>
      </div>

      <div class="grid gap-4 mt-12">
        <h2 class="text-2xl font-bold">
          What I've Done
        </h2>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-8">
          <Project image="/datajoe-logo.png">
            <template #title>
              <a
                href="https://datajoe.com"
                target="_blank"
                class="text-lg font-bold underline flex items-center gap-2"
              >
                <Icon
                  name="mdi:open-in-new"
                  class="text-neutral-400"
                />
                DataJoe
              </a>
              <p class="text-sm text-neutral-400">
                Internal survey & data management to external microsite automation.
              </p>
            </template>
            <template #description>
              <div class="flex flex-col gap-2 text-neutral-300 text-sm">
                <p>
                  Built the entire internal app and client-facing tech that the business is built on. Built with a Laravel (PHP) API, a VueJS frontend, a Postgres database, distributed microsites, and several complimentary tools, such as survey forms, directories, and other client-facing tools.
                </p>
                <p>
                  I maintain and support the application, including security updates, framework updates, package and dependency management, and server management.
                </p>
                <p>
                  Implemented the server infrastructure on AWS for a high-volume distributed API that has handled millions of survey submissions.
                </p>
                <p>
                  Regularly create automations and tools to empower the human team and eliminate unnecessary manual work.
                </p>
              </div>
            </template>
          </Project>
          <Project image="/elethor-logo.png">
            <template #title>
              <a
                href="https://elethor.com"
                target="_blank"
                class="text-lg font-bold underline flex items-center gap-2"
              >
                <Icon
                  name="mdi:open-in-new"
                  class="text-neutral-400"
                />
                Elethor
              </a>
              <p class="text-sm text-neutral-400">
                A text-based browser MMO.
              </p>
            </template>
            <template #description>
              <div class="flex flex-col gap-2 text-neutral-300 text-sm">
                <p>
                  I went completely from idea to full delivery and continued development on a huge game project.
                </p>
                <p>
                  This project has truly stretched my skills. I've grown as a developer, from sysadmin and server management to front-end UX and design.
                </p>
                <p>
                  I've managed the game community of 700+ active players for years, handling issues and support, moderation, community events, and much more.
                </p>
              </div>
            </template>
          </Project>
          <Project image="/smeltery-logo.svg">
            <template #title>
              <a
                href="https://smeltery.gg"
                target="_blank"
                class="text-lg font-bold underline flex items-center gap-2"
              >
                <Icon
                  name="mdi:open-in-new"
                  class="text-neutral-400"
                />
                smeltery.gg
              </a>
              <p class="text-sm text-neutral-400">
                A community directory for the PBBG game genre.
              </p>
            </template>
            <template #description>
              <div class="flex flex-col gap-2 text-neutral-300 text-sm">
                <p>
                  I had the MVP built and hosted in a couple of weekends (thanks Laravel + Vapor).
                </p>
                <p>
                  The back-end is built with Filament with some super easy data management tools. The idea is anyone could go in and manage the entire site from the dashboard.
                </p>
                <p>
                  I pulled in several 3rd-party APIs to get this all to work. Things like Discord for notifications, a tool built by another developer to support showing player count, a tool to automatically grab images and data from websites for new listings, and even some LLM stuff for writing game descriptions.
                </p>
                <p>
                  I was able to go from idea all the way to the community actually submitting games and talking about the site. This wasn't just a pet project, this met a real need and people actually use it on a regular basis to find new games.
                </p>
              </div>
            </template>
          </Project>
          <Project image="/whaleshark-logo.png">
            <template #title>
              <a
                href="https://whaleshark.gg"
                target="_blank"
                class="text-lg font-bold underline flex items-center gap-2"
              >
                <Icon
                  name="mdi:open-in-new"
                  class="text-neutral-400"
                />
                Whaleshark
              </a>
              <p class="text-sm text-neutral-400">
                A directory of F2P game monetization methods.
              </p>
            </template>
            <template #description>
              <div class="flex flex-col gap-2 text-neutral-300 text-sm">
                <p>
                  A platform that showcases how a variety of F2P games monetize, so that indie developers and other small studios can easily see best monetization practices across genres and monetization methods.
                </p>
                <p>
                  The stack includes Laravel, InertiaJS with Vue, deployed on AWS with Laravel Vapor, and managed with a Filament dashboard.
                </p>
                <p>
                  The process for researching and documenting for each method is created and facilitated by me, using AI to help do deep research into specifics.
                </p>
              </div>
            </template>
          </Project>
        </div>
      </div>

      <Footer class="mt-auto" />
    </main>
  </UApp>
</template>
