import { ActionFunctionArgs, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { deleteContact } from '~/data';


// this runs after the "destroy" action has been run on the form relative to this file.
export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contact Id');
  await deleteContact(params.contactId);
  return redirect(`/`);
};
