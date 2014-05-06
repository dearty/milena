###
# Compass
###

# Susy grids in Compass
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###


# Per-page layout changes:
#
# With no layout
# page "/tabela-rozmiarow.html", :layout => false

#
# activate :blog do |blog|
  # set options on blog
# end
# page "/sitemap.xml", :layout => false

# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload




# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
helpers do
  def is_page_active(page)
    current_page.url == page ? {:class => 'robocze-is-active'} : {}
  end
end

set :css_dir, 'css'

set :js_dir, 'javascripts'

set :images_dir, 'images'

 # activate :directory_indexes
 # activate :relative_assets

# Build-specific configuration
configure :build do

  # activate :gzip

  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Minify HTML on build
  # activate :minify_html,  options = {
  #   :enabled => true,
  #   :remove_multi_spaces => true,
  #   :remove_comments => true,
  #   :remove_intertag_spaces => false,
  #   :remove_quotes => false,
  #   :compress_css => false,
  #   :compress_javascript => false,
  #   :simple_doctype => false,
  #   :remove_script_attributes => false,
  #   :remove_style_attributes => false,
  #   :remove_link_attributes => false,
  #   :remove_form_attributes => false,
  #   :remove_input_attributes => false,
  #   :remove_javascript_protocol => false,
  #   :remove_http_protocol => false,
  #   :remove_https_protocol => false,
  #   :preserve_line_breaks => false,
  #   :simple_boolean_attributes => false
  # }

  # Enable cache buster
  # activate :asset_hash
  # activate :asset_hash, :ignore => %r{^images/responsive/.*}

  # activate :directory_indexes

  # Use relative URLs
 # activate :relative_assets

 # autoprefixer
activate :autoprefixer do |config|
  config.browsers = ["last 2 versions", "> 10%", "ie 8", "android 2.3"]
end



  # Or use a different image path
  # set :http_path, "/Content/images/"
end
