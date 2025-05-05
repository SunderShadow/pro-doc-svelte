import { redirect } from '@sveltejs/kit'

export function load({params}) {
    redirect(307, '/clinics/' + params.slug + '/about');
}