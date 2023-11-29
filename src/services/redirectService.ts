import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export let router : AppRouterInstance | null = null;

export function setRoute(routerObject : AppRouterInstance) {
    router = routerObject;
}