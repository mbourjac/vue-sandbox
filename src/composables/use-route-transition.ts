import { onMounted, ref, useTemplateRef } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import gsap from 'gsap';

export const useRouteTransition = () => {
  const isRouteTransition = ref(false);
  const page = useTemplateRef<HTMLElement>('page');

  onMounted(() => {
    gsap.fromTo(page.value, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  });

  onBeforeRouteLeave((_to, _from, next) => {
    const animationDurationInMs = 400;

    isRouteTransition.value = true;
    gsap.to(page.value, { opacity: 0, duration: animationDurationInMs / 1000 });

    setTimeout(() => {
      next();
    }, animationDurationInMs);
  });

  return { isRouteTransition, page };
};
