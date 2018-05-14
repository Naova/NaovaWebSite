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
define('DB_NAME', 'clubnao_wp225');

/** MySQL database username */
define('DB_USER', 'clubnao_wp225');

/** MySQL database password */
define('DB_PASSWORD', '.3p65.olS7');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'tkdqaogkahjbreeic80gest8seizezigpujiddsto3edmyslv2ztjwoyr1ydyzgk');
define('SECURE_AUTH_KEY',  '18jfl3wxpke7ko4s1bztl102flbicrkgbo6ipfqjpwwhzf6fptqmexhtdks2o4hc');
define('LOGGED_IN_KEY',    'a557odpjwf2o0exhuxv75dbrfgu2awme5utam3akauwbsul8nzjtt9l4eeywij1y');
define('NONCE_KEY',        'aztz1k6x1cqsquqrjvfbt6yvvrnzho0zeydngbnuzdwohrltv3u5ed8mjtfloj8y');
define('AUTH_SALT',        'lh36yadccfs4mbnyecp6tibnuwcsqjhgblquiegwu9arlxrx9ca2nox4lz1ewmue');
define('SECURE_AUTH_SALT', 'n92arrewn5ybot6hbtx1ys1xjrhivbx9oii1s4cmggbijrieg2yvkz5oe7qgiluf');
define('LOGGED_IN_SALT',   'phcmilxv9kqc7lonypigi3onr7vgvpkafa4689tdypamimoiwajmmor7jiihveve');
define('NONCE_SALT',       'ngn00fyzbtuitan7qu9cvihzakdxb1qnilkqsa08tqvegeqkph9ihppedehxfheq');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp5e_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
