/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.map-field.metabox', 'carbon-fields/metaboxes', ( OriginalMapField ) => withField( OriginalMapField ) );
