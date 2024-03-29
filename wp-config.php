<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sal_man_dk' );

/** MySQL database username */
define( 'DB_USER', 'sal_man_dk' );

/** MySQL database password */
define( 'DB_PASSWORD', 'YczUYCubRZPtdaw9nB7MMoN7' );

/** MySQL hostname */
define( 'DB_HOST', 'sal-man.dk.mysql.service.one.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'yAlvO4orZaFqO13-Dvnqs5gCbIheTFvj4HV0SmZl_Gk=' );
define( 'SECURE_AUTH_KEY',  'a8PXcUQBv4R7h0jiIJ1RnlzXDb5ESvfNtGsf7MvttNg=' );
define( 'LOGGED_IN_KEY',    '20xuSiA4lCd5fW2lOhBP7hR8DCiBivPV1gP2Pf3MeD0=' );
define( 'NONCE_KEY',        'T1cQSxLMIwUHcObcLp8ZihYQDiTvgVkmEeRkcHKCHWQ=' );
define( 'AUTH_SALT',        'Is-ZvphV8KMAVCQOmkdRss2vrq5SkFnmAHg6seR40zw=' );
define( 'SECURE_AUTH_SALT', 'TE2bLeEb1K_h7riWN2OlnGVTjTeuo4JOWLbk21fsMto=' );
define( 'LOGGED_IN_SALT',   'WjfQrTMt33KXq8K_OpKW0Wl7srN6HBvau6BBF00oh0Y=' );
define( 'NONCE_SALT',       '7Dmo58OwRi2dua497WJlC9-wGSP_pq-UW6SKYqId_xs=' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'runtogether_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define( 'WPLANG', 'da_DK' );

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/**
 * Prevent file editing from WP admin.
 * Just set to false if you want to edit templates and plugins from WP admin.
 */
define('DISALLOW_FILE_EDIT', true);

/**
 * API for One.com wordpress themes and plugins
 */
define('ONECOM_WP_ADDONS_API', 'https://wpapi.one.com');

/** 
 * Client IP for One.com logs
 */
if (getenv('HTTP_CLIENT_IP')){$_SERVER['ONECOM_CLIENT_IP'] = @getenv('HTTP_CLIENT_IP');}
else if(getenv('REMOTE_ADDR')){$_SERVER['ONECOM_CLIENT_IP'] = @getenv('REMOTE_ADDR');}
else{$_SERVER['ONECOM_CLIENT_IP']='0.0.0.0';}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
